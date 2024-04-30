"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planet = void 0;
const planet = (ActivePlanet) => {
    let returnObject = {
        ':moon': false,
        ':mars': false,
        ':europa': false,
        ':titan': false,
    };
    if (ActivePlanet != '') {
        returnObject[ActivePlanet] = true;
    }
    return returnObject;
};
exports.planet = planet;
