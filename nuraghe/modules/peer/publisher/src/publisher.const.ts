import nesoi from '$';

export default nesoi.constants('publisher')
  .values($ => ({
    'PUBLISHER_DB_CRYPTO_KEY': $.app('PUBLISHER_DB_CRYPTO_KEY')
  }));