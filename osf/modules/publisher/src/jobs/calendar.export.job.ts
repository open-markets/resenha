import nesoi from "$";

export default nesoi.job('publisher::calendar.export')
    .message('', $ => ({
        calendar: $.id('schedule::calendar', 'full')
    }))
    .message('output', $ => ({
        filename: $.string,
        content: $.string
    }))
    .input('@')
    .method($ => {
        const filename = $.msg.calendar.id+'.osf';
        const json = JSON.stringify($.msg.calendar, undefined, 2);
        const content = Buffer.from(json).toString('base64');
        // const file = NesoiFile.local.new(filepath, content);
        return { filename, content }
    })