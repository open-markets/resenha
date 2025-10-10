import nesoi from '$';

export default nesoi.bucket('backup::backup')
  .model($ => ({
    __nrge: $.literal<`backup:${number}`>(/backup:\d+/),
    id: $.string, // ULID
    hash: $.string,
    
    module: $.enum(['consumer', 'publisher', 'tracker']),
    owner_id: $.string,
        
    backup_at: $.datetime,
    
    /* node: {
     *   [type:id]: Publisher | Tracker 
     * } */
    node: $.dict($.dict($.any)),
    
    /* plugin: {
     *   [nrge_type:plugin:type:id]: Data | Content
     * } */
    plugin: $.dict($.dict($.any)),

  }));