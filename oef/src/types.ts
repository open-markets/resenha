/* Calendar */

export type OEF_Calendar = {
    __oef: `${'calendar'|'event'}:${number}.${number}`,
    
    id: string
    hash: string

    title: string
    description?: string

    url: string
    recover_url?: string

    owner: OEF_CalendarOwner
    events: OEF_Event[]
}

export type OEF_CalendarOwner = {
    name: string
    description?: string
}

/* Event */

export type OEF_Event = {
    __oef: `${'calendar'|'event'}:${number}.${number}`,

    id: string
    hash: string

    title: string
    description: string

    locations: {
        [x: string]: OEF_Location
    }
    schedules: OEF_Schedule[]

    medias: OEF_Media[]

    properties: {
        service: OEF_ServiceProperty[]
        structure: OEF_StructureProperty[]
        condition: OEF_ConditionProperty[]
    }

    contact: OEF_ContactInformation[]
}

/* Location */

export type OEF_Location = {
    id: string
    lat: number,
    lon: number,
    address: OEF_Address
    place: OEF_Venue
}

export type OEF_Address = {
    country: string
    state: string
    city: string
    street: string
    number: string
    extra?: string
    reference?: string
}

export type OEF_Venue = {
    name: string
}

/* Schedule */

export type OEF_Schedule = {
    location: string
    start: string
    end: string
    description?: string
}

/* Media */

export type OEF_Media =
    OEF_PostMedia
    | OEF_ImageMedia
    | OEF_VideoMedia
    | OEF_OtherMedia

export type OEF_PostMedia = {
    type: 'post'
    subtype: 'tiktok'|'instagram'|'facebook'|'linkedin'
    url: string
}

export type OEF_ImageMedia = {
    type: 'image'
    url: string
    description?: string
}

export type OEF_VideoMedia = {
    type: 'video'
    subtype: 'youtube'|'tiktok'|'instagram'|'facebook'|'linkedin'
    url: string
    description?: string
}

export type OEF_OtherMedia = {
    type: 'other'
    url: string
    description?: string
}

/* Properties */

export type OEF_ServiceProperty = {
    type: 'service',
    subtype: 'food'|'music'|'arts'|'other',
    id: string
    title: string,
    description: string,
    value: string
}

export type OEF_StructureProperty = {
    type: 'structure',
    subtype: 'bathroom'|'seating'|'parking'|'climate'|'accessibility'|'other',
    id: string
    title: string,
    services?: string[],
    description?: string
}

export type OEF_ConditionProperty = {
    type: 'condition',
    id: string
    required: boolean,
    title: string,
    description: string,
}

/* Contact */

export type OEF_ContactInformation = {
    type: 'email'|'phone'|'social_media'|'other',
    value: string
}
