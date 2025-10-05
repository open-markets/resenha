export type ULID = string
export type URL = string
export type Version = `${number}.${number}`
export type DateTime = string

/* Tracker */

export type OSF_Tracker = {
    __nrge: `tracker:${Version}`,

    id: ULID

    alias: string
    description?: string

    url: URL

    seeders: {
        [id: ULID]: URL
    }
}

/* Seeder */

export type OSF_Seeder = {
    __nrge: `seeder:${Version}`,

    id: ULID
    alias: string
    description?: string

    url: URL
    recover_url?: URL

    calendars: {
        [id: ULID]: OSF_Calendar
    }
}

/* Calendar */

export type OSF_Calendar = {
    __nrge: `calendar:${Version}`,

    id: ULID
    hash: string

    alias: string
    description?: string

    seeder_id: ULID
    events: OSF_Event[]
}

/* Event */

export type OSF_Event = {
    __nrge: `event:${Version}`,
    
    id: ULID
    hash: string

    alias: string
    description: string

    locations: OSF_Location[]

    schedules: OSF_Schedule[]
    medias: OSF_Media[]

    properties: 
        ( OSF_ServiceProperty
        | OSF_StructureProperty
        | OSF_ConditionProperty)[]

    contacts: OSF_ContactInformation[]
}

/* Location */

export type OSF_Location = {
    __nrge: `location:${Version}`,
    id: ULID
    name: string
    address: OSF_Address
}

export type OSF_Address = {
    __nrge: `address:${Version}`,
    id: ULID
    lat: number,
    lon: number,
    country: string
    state: string
    city: string
    street?: string
    number?: string
    extra?: string
    reference?: string
}

/* Schedule */

export type OSF_Schedule = {
    __nrge: `schedule:${Version}`,
    id: ULID
    location: ULID
    start: DateTime
    end: DateTime
    description?: string
}

/* Media */

export type OSF_Media =
    OSF_PostMedia
    | OSF_ImageMedia
    | OSF_VideoMedia
    | OSF_OtherMedia

export type OSF_PostMedia = {
    type: 'post'
    subtype: 'tiktok'|'instagram'|'facebook'|'linkedin'
    url: URL
}

export type OSF_ImageMedia = {
    type: 'image'
    url: URL
    description?: string
}

export type OSF_VideoMedia = {
    type: 'video'
    subtype: 'youtube'|'vimeo'|'google-drive'
    url: URL
    description?: string
}

export type OSF_OtherMedia = {
    type: 'other'
    url: URL
    description?: string
}

/* Properties */

export type OSF_ServiceProperty = {
    id: ULID
    type: 'service',
    subtype: 'food'|'music'|'arts'|'other',
    alias: string,
    description: string,
    value: string
}

export type OSF_StructureProperty = {
    id: ULID
    type: 'structure',
    subtype: 'bathroom'|'seating'|'parking'|'climate'|'accessibility'|'other',
    alias: string,
    services?: string[],
    description?: string
}

export type OSF_ConditionProperty = {
    id: ULID
    type: 'condition',
    required: boolean,
    alias: string,
    description: string,
}

/* Contact */

export type OSF_ContactInformation = {
    id: ULID
    type: 'email'|'phone'|'social_media'|'other',
    value: string
}
