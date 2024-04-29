"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.background = exports.Active = void 0;
const Active = (ActiveMenu) => {
    let returnObject = {
        home: false,
        destination: false,
        crew: false,
        technology: false
    };
    if (ActiveMenu != '') {
        returnObject[ActiveMenu] = true;
    }
    return returnObject;
};
exports.Active = Active;
const background = (activeBackground) => {
    let returnObject = {
        '/:': false,
        '/destination:': false,
        '/crew:': false,
        '/technology:': false
    };
    if (activeBackground != '') {
        returnObject[activeBackground] = true;
    }
    return returnObject;
};
exports.background = background;
