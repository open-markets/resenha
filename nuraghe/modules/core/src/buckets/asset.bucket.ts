import nesoi from '$';

export default nesoi.bucket('core::asset')
  .model($ => ({
    id: $.string,
    
    public: $.boolean,
    publisher_id: $.string,
    
    plugin: $.enum('plugin'),
    plugin_asset: $.enum('plugin_asset'),
    data: $.dict($.any),
    
    published_at: $.datetime,
  }));