"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.technology = exports.crew = exports.destination = exports.home = void 0;
const ActiveMenu_1 = require("../helpers/ActiveMenu");
const DestinationModel_1 = require("../models/DestinationModel");
const CrewModel_1 = require("../models/CrewModel");
const TechnologyModel_1 = require("../models/TechnologyModel");
const home = (req, res) => {
    res.render('pages/home', {
        menu: (0, ActiveMenu_1.Active)('home'),
        background: (0, ActiveMenu_1.background)('/:')
    });
};
exports.home = home;
const destination = (req, res) => {
    const defaultPlanet = () => {
        if (req.params) {
            return DestinationModel_1.dataPlanet[0];
        }
    };
    res.render('pages/destination', {
        menu: (0, ActiveMenu_1.Active)('destination'),
        defaultPlanet: DestinationModel_1.dataPlanet[0],
        background: (0, ActiveMenu_1.background)('/destination:')
    });
};
exports.destination = destination;
const crew = (req, res) => {
    const defaultCrew = () => {
        if (req.params) {
            return CrewModel_1.dataCrew.crew[0];
        }
    };
    res.render('pages/crew', {
        menu: (0, ActiveMenu_1.Active)('crew'),
        crewDefault: defaultCrew(),
        background: (0, ActiveMenu_1.background)('/crew:')
    });
};
exports.crew = crew;
const technology = (req, res) => {
    const defaultTechnology = () => {
        if (req.params) {
            return TechnologyModel_1.dataTechnology[0];
        }
    };
    res.render('pages/technology', {
        menu: (0, ActiveMenu_1.Active)('technology'),
        technologyDefault: defaultTechnology(),
        background: (0, ActiveMenu_1.background)('/technology:')
    });
};
exports.technology = technology;
