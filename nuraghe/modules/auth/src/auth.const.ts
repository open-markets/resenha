import nesoi from "$";

export default nesoi.constants('auth')
    .values($ => ({
        'PASSWORD_CRYPTO_KEY': $.app('MODULE_AUTH_PASSWORD_CRYPTO_KEY'),
        'PRIVATE_DATA_CRYPTO_KEY': $.app('MODULE_AUTH_PRIVATE_DATA_CRYPTO_KEY')
    }))