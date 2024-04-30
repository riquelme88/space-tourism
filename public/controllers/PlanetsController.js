"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destinations = void 0;
const ActiveDestin_1 = require("../helpers/ActiveDestin");
const DestinationModel_1 = require("../models/DestinationModel");
const ActiveMenu_1 = require("../helpers/ActiveMenu");
const destinations = (req, res) => {
    let param = req.params.destinations;
    const returnPlanet = () => {
        if (param == ':moon') {
            return DestinationModel_1.dataPlanet[0];
        }
        else if (param == ':mars') {
            return DestinationModel_1.dataPlanet[1];
        }
        else if (param == ':europa') {
            return DestinationModel_1.dataPlanet[2];
        }
        else if (param == ':titan') {
            return DestinationModel_1.dataPlanet[3];
        }
    };
    const activePlanet = () => {
        if (param == ':moon') {
            return (0, ActiveDestin_1.planet)(':moon');
        }
        else if (param == ':mars') {
            return (0, ActiveDestin_1.planet)(':mars');
        }
        else if (param == ':europa') {
            return (0, ActiveDestin_1.planet)(':europa');
        }
        else if (param == ':titan') {
            return (0, ActiveDestin_1.planet)(':titan');
        }
    };
    res.render('pages/destination', {
        planets: returnPlanet(),
        active: activePlanet(),
        background: (0, ActiveMenu_1.background)('/destination:')
    });
};
exports.destinations = destinations;
