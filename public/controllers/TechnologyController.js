"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.technologyController = void 0;
const TechnologyModel_1 = require("../models/TechnologyModel");
const ActiveTechnology_1 = require("../helpers/ActiveTechnology");
const ActiveMenu_1 = require("../helpers/ActiveMenu");
const technologyController = (req, res) => {
    let params = req.params.technologys;
    const returnTechnology = () => {
        if (params == ':Launchvehicle') {
            return TechnologyModel_1.dataTechnology[0];
        }
        else if (params == ':Spaceport') {
            return TechnologyModel_1.dataTechnology[1];
        }
        else if (params == ':Spacecapsule') {
            return TechnologyModel_1.dataTechnology[2];
        }
    };
    const returnActive = () => {
        if (params == ':Launchvehicle') {
            return (0, ActiveTechnology_1.technologyActive)('Launchvehicle');
        }
        else if (params == ':Spaceport') {
            return (0, ActiveTechnology_1.technologyActive)('Spaceport');
        }
        else if (params == ':Spacecapsule') {
            return (0, ActiveTechnology_1.technologyActive)('Spacecapsule');
        }
    };
    res.render('pages/technology', {
        techModel: returnTechnology(),
        active: returnActive(),
        background: (0, ActiveMenu_1.background)('/technology:')
    });
};
exports.technologyController = technologyController;
