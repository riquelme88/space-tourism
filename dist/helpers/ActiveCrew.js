"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crewActives = void 0;
const crewActives = (ActiveCrew) => {
    let returnObject = {
        ':Douglas': false,
        ':Mark': false,
        ':Victor': false,
        ':Anousheh': false,
    };
    if (ActiveCrew != '') {
        returnObject[ActiveCrew] = true;
    }
    return returnObject;
};
exports.crewActives = crewActives;
