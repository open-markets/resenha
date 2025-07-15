import { OEF_Calendar, OEF_Event } from "types";

export function calendar(obj: Record<string, any>): OEF_Calendar {
    const calendar: Partial<OEF_Calendar> = {};

    // TODO: validate and build calendar

    return calendar as OEF_Calendar;
}

export function event(obj: Record<string, any>): OEF_Event {
    const event: Partial<OEF_Event> = {};

    // TODO: validate and build event

    return event as OEF_Event;
}