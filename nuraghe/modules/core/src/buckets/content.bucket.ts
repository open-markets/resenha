  import nesoi from '$';

export default nesoi.bucket('core::content')
  .model($ => ({
    id: $.string, // ULID
    publisher_id: $.string,

    public: $.boolean,

    alias: $.string,
    description: $.string,

    hash: $.string,
    published_at: $.datetime,
    
    plugin: $.enum('plugin'),
    plugin_metadata: $.dict($.string),

    assets: $.dict($.string),
    children: $.dict($.string)
  }))
  .graph($ => ({
    'assets': $.many('asset', {
      'id in': {'.':'assets'}
    }),
    'children': $.many('content', {
      'id in': {'.':'children'}
    }),
  }))