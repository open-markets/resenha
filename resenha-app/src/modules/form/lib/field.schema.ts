export type $Field = {
    alias: string
    key: string
    meta: {
        text?: {
            type?: 'search'
        }
        enum?: {
            icon?: string
            options: Record<string, any>[]
        }
    }
}

export const field = {
    text(alias: string, key: string, meta?: $Field['meta']['text']): $Field {
        return {
            alias,
            key,
            meta: {
                text: meta ?? {}
            }
        }
    },
    enum(alias: string, key: string, meta: NonNullable<$Field['meta']['enum']>): $Field {
        return {
            alias,
            key,
            meta: {
                enum: meta
            }
        }
    }
}