import nesoi from "$";

export default nesoi.externals('schedule')

    .bucket('info::address')
    .bucket('info::contact')
    .bucket('info::location')
    .bucket('info::media')
    .bucket('peer::publisher')

    .message('info::address.put')
    .message('info::contact.put')
    .message('info::location.put')
    .message('info::media.put')
    .message('peer::publisher.put')