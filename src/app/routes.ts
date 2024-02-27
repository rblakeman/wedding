export enum Tabs {
    HOTEL = 'hotel',
    PHOTOS = 'photos',
    REGISTRY = 'registry',
    RSVP = 'rsvp',
    THINGS_TO_DO = 'things-to-do',
    TRAVEL = 'travel',
    WELCOME = 'welcome',
}

// Order Sensitive
export const TabList = [
    {
        id: Tabs.WELCOME,
        label: 'Welcome',
    },
    {
        id: Tabs.RSVP,
        label: 'RSVP',
    },
    {
        id: Tabs.HOTEL,
        label: 'Hotel',
    },
    {
        id: Tabs.THINGS_TO_DO,
        label: 'Things To Do',
    },
    {
        id: Tabs.TRAVEL,
        label: 'Travel',
    },
    {
        id: Tabs.REGISTRY,
        label: 'Registry',
    },
    {
        id: Tabs.PHOTOS,
        label: 'Photos',
    },
];

export const defaultRoute = Tabs.WELCOME;
