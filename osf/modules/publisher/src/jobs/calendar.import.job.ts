import nesoi from "$";

export default nesoi.job('publisher::calendar.import')
    .message('', $ => ({
        content: $.string
    }))
    .input('@')
    .method(async $ => {
        const content = Buffer.from($.msg.content, 'base64').toString();
        const json = JSON.parse(content);
        return $.trx.job('schedule::calendar.put').run(json);
    })