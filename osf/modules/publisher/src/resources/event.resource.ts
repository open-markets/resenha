import nesoi from "$";
import { ulid } from "ulid";

export default nesoi.resource('publisher::event')
    .bucket('schedule::event')
    .view()
    .query()