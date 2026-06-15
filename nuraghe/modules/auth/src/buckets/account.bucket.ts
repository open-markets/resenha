import nesoi from '$';

export default nesoi.bucket('auth::account')
  .model($ => ({
    id: $.string, // ULID

    owner_type: $.enum(['publisher', 'tracker']),
    publisher_id: $.string.optional,
    tracker_id: $.string.optional,
    
    person_id: $.string,
    alias: $.string,
    
    email: $.string,
    password: $.string.encrypt('PASSWORD_CRYPTO_KEY'),

    permissions: $.dict($.any)
  }));