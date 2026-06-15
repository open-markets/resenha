import nesoi from '$';

export default nesoi.bucket('auth::session_token')
  .model($ => ({
    id: $.int,
    
    account_id: $.string,
    token: $.string,
    
    issued_at: $.datetime,
    expires_at: $.datetime
  }));