import nesoi from '$';

export default nesoi.bucket('auth::person')
  .model($ => ({
    id: $.string, // ULID
    
    alias: $.string,
    full_name: $.string,
    
    // private_data: $.dict($.string).encrypt('PRIVATE_DATA_CRYPTO_KEY'),
    public_data: $.dict($.string)
  }));