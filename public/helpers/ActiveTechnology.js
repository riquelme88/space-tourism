"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.technologyActive = void 0;
const technologyActive = (activeTechnology) => {
    let returnObject = {
        'Launchvehicle': false,
        'Spaceport': false,
        'Spacecapsule': false
    };
    if (activeTechnology != '') {
        returnObject[activeTechnology] = true;
    }
    return returnObject;
};
exports.technologyActive = technologyActive;
