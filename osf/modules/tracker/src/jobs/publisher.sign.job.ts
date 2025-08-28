import nesoi from "$";

export default nesoi.job('tracker::publisher.sign')
    .message('', $ => ({
        token: $.string
    }))
    .input('@')
    .method(async $ => {
        
    })