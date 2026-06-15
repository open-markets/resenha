import nesoi from "$";
import { CoreConstants } from ".nesoi/core.module";
import { NesoiDatetime } from "nesoi/lib/engine/data/datetime";
import { Log } from "nesoi/lib/engine/util/log";
import { ulid } from "ulid";

export default nesoi.job('auth::join')
    .message('', $ => ({
        token: $.string,
        alias: $.string.optional,
        description: $.string.optional,
        
        type: $.enum('core::publisher_type'),
        subtype: $.enum('core::publisher_subtype.{type}'),

        person: $.obj({
            alias: $.string,
            full_name: $.string,
            public_data: $.dict($.string).default({}),
        }),
        password: $.string
    }))
    .input('@')

    .extra(async $ => ({
        invite_token: await $.trx.bucket('invite_token').query({
            token: $.msg.token
        }).first()
    }))

    .assert($ =>
           !!$.extra.invite_token
        || 'Convite inválido'
    )
    .assert($ =>
           $.extra.invite_token!.issued_at.plus('7 days').compare(NesoiDatetime.now()) > 0
        || 'Convite expirado'
    )

    .extra($ => ({
        is_new: !$.extra.invite_token!.publisher_id
    }))

    .assert($ => 
           !$.extra.is_new
        || !!$.msg.alias
        || 'Nome do publisher é obrigatório para esse convite'
    )

    .assert($ => 
           !$.extra.is_new
        || !!$.msg.type
        || 'Tipo do publisher é obrigatório para esse convite'
    )
    .assert($ => 
           !$.extra.is_new
        || !!$.msg.subtype
        || 'Sub-Tipo do publisher é obrigatório para esse convite'
    )

    .assert($ =>
           $.msg.password.length >= 8
        || 'Senha deve conter no mínimo 8 dígitos'
    )

    .method(async $ => {
        let publisher;
        if (!$.extra.is_new) {
            publisher = await $.trx.bucket('core::publisher').readOneOrFail($.extra.invite_token!.publisher_id!);
        }
        else {
            publisher = await $.trx.bucket('core::publisher').create({
                ...{id: ulid()}, // nesoi-todo: include optional id on create type
                alias: $.msg.alias!,
                description: $.msg.description,
                uris: [],
                type: $.msg.type,
                subtype: $.msg.subtype as keyof CoreConstants['enums']['publisher_subtype']['#data'], // nesoi-todo: fix types
            });
        }

        const person = await $.trx.bucket('person').create({
            ...{id: ulid()}, // nesoi-todo: include optional id on create type
            alias: $.msg.person.alias,
            full_name: $.msg.person.full_name,
            private_data: {},
            public_data: {
                // instagram: $.msg.person.public_data.instagram,
            }
        });
        const account = await $.trx.bucket('account').create({
            ...{id: ulid()}, // nesoi-todo: include optional id on create type
            owner_type: 'publisher',
            publisher_id: publisher.id,
            person_id: person.id,
            alias: person.alias,
            email: $.extra.invite_token!.email,
            password: $.msg.password,
            permissions: {}
        });
        Log.info('job', 'auth::invite_accept', `Account created: ${account.id}`);
    })