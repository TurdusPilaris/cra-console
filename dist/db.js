"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDB = exports.AvailableResolution = exports.Ava1 = void 0;
exports.Ava1 = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160'];
var AvailableResolution;
(function (AvailableResolution) {
    AvailableResolution[AvailableResolution["P144"] = 0] = "P144";
    AvailableResolution[AvailableResolution["P240"] = 1] = "P240";
    AvailableResolution[AvailableResolution["P360"] = 2] = "P360";
    AvailableResolution[AvailableResolution["P480"] = 3] = "P480";
    AvailableResolution[AvailableResolution["P720"] = 4] = "P720";
    AvailableResolution[AvailableResolution["P1080"] = 5] = "P1080";
    AvailableResolution[AvailableResolution["P1440"] = 6] = "P1440";
    AvailableResolution[AvailableResolution["P2160"] = 7] = "P2160";
})(AvailableResolution || (exports.AvailableResolution = AvailableResolution = {}));
//export const createDB = () => {
const createDB = () => {
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
    };
};
exports.createDB = createDB;
