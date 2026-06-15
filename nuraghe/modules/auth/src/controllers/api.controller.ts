import nesoi from "$";

export default nesoi.controller('auth::api')
    .domain('auth', $ => $
        .endpoint('invite', $ => $
            .msg('invite').toJob('invite')
        )
        .endpoint('join', $ => $
            .msg('join').toJob('join')
        )
        .endpoint('login', $ => $
            .msg('login').toJob('login')
        )
    )