import nesoi from "$";

export default nesoi.externals('publisher')
    .job('schedule::calendar.put')
    .bucket('schedule::calendar')
    .bucket('schedule::event')
    .bucket('peer::publisher')