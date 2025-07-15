import * as fs from 'fs';
import { OEF_Calendar, OEF_Event } from "types";

export function dumpCalendar(calendar: OEF_Calendar, path: string) {
    const str = JSON.stringify(calendar)
    const base64 = btoa(str);
    fs.writeFileSync(path, base64);
}

export function dumpEvent(event: OEF_Event, path: string) {
    const str = JSON.stringify(event)
    const base64 = btoa(str);
    fs.writeFileSync(path, base64);
}

export function parse(path: string) {
    const base64 = fs.readFileSync(path).toString();
    const str = atob(base64);
    return JSON.parse(str)
}