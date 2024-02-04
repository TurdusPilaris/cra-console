export type VideoType = {
    id: number;
    title: string;
    author: string;
    canBeDownloaded: boolean;
    minAgeRestriction: number | null;
    createdAt: string;
    publicationDate: string;
    availableResolutions: typeof Ava1;

}
export const Ava1 = ['P144', 'P240' , 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160']
export enum AvailableResolution {'P144', 'P240' , 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160'}

//export const createDB = () => {

export const createDB = ():DBType => {
    return {
        videos: [
            {
                id: 0,
                title: 'cat eats mouse',
                author: 'Helen Smith',
                canBeDownloaded: true,
                minAgeRestriction: 12,
                createdAt: new Date(2023, 10, 2).toISOString(),
                publicationDate: new Date(2023, 10, 26).toISOString(),
                availableResolutions: ['P240']
            },
            {
                id: 1,
                title: 'dude is broken his leg',
                author: 'Bob Dylan',
                canBeDownloaded: false,
                minAgeRestriction: 18,
                createdAt: new Date(2022, 8, 13).toISOString(),
                publicationDate: new Date(2022, 8, 28).toISOString(),
                availableResolutions: ['P144']
            },
            {
                id: 2,
                title: 'sweaty horse',
                author: 'Helen Smith',
                canBeDownloaded: true,
                minAgeRestriction: 0,
                createdAt: new Date(2023, 12, 2).toISOString(),
                publicationDate: new Date(2023, 12, 26).toISOString(),
                availableResolutions: ['P144']
            },
            {
                id: 3,
                title: 'monster truck go the school',
                author: 'Alex Tseluyko',
                canBeDownloaded: true,
                minAgeRestriction: 6,
                createdAt: new Date(2016, 5, 2).toISOString(),
                publicationDate: new Date(2016, 5, 26).toISOString(),
                availableResolutions: ['P144']
            },
            {
                id: 4,
                title: 'girl smiles on the corner street',
                author: 'Alex Tseluyko',
                canBeDownloaded: true,
                minAgeRestriction: 0,
                createdAt: new Date(2019, 10, 2).toISOString(),
                publicationDate: new Date(2019, 10, 26).toISOString(),
                availableResolutions: ['P144']
            },
        ]
    }
}


export type DBType = {
    videos: VideoType[]
}