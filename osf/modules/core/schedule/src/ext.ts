import nesoi from "$";

export default nesoi.externals('schedule')

    .bucket('info::address')
    .bucket('info::contact')
    .bucket('info::location')
    .bucket('info::media')
    .bucket('peer::publisher')

    .message('info::address.create')
    .message('info::address.put')
    .message('info::contact.create')
    .message('info::contact.put')
    .message('info::location.create')
    .message('info::location.put')
    .message('info::media.create')
    .message('info::media.put')
    .message('peer::publisher.create')
    .message('peer::publisher.put')