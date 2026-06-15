import nesoi from '$';

export default nesoi.bucket('auth::invite_token')
  .model($ => ({
    id: $.int,
    
    state: $.enum(['issued', 'seen', 'used', 'dismissed']),
    
    email: $.string,
    publisher_id: $.string.optional,
    
    token: $.string,
    
    issued_at: $.datetime
  }));