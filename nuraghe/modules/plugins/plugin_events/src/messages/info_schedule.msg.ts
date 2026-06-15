import nesoi from '$';

export default nesoi.message('plugin_events::info_schedule')
  .template($ => ({
    location: $.msg('info::location'),
    start_datetime: $.datetime,
    end_datetime: $.datetime,
    description: $.string.optional
  }))