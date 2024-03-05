"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crews = void 0;
const CrewModel_1 = require("../models/CrewModel");
const ActiveCrew_1 = require("../helpers/ActiveCrew");
const ActiveMenu_1 = require("../helpers/ActiveMenu");
const crews = (req, res) => {
    let param = req.params.crews;
    const crewFun = () => {
        if (param == ':Douglas') {
            return CrewModel_1.dataCrew.crew[0];
        }
        else if (param == ':Mark') {
            return CrewModel_1.dataCrew.crew[1];
        }
        else if (param == ':Victor') {
            return CrewModel_1.dataCrew.crew[2];
        }
        else if (param == ':Anousheh') {
            return CrewModel_1.dataCrew.crew[3];
        }
    };
    const crewActive = () => {
        if (param == ':Douglas') {
            return (0, ActiveCrew_1.crewActives)(':Douglas');
        }
        else if (param == ':Mark') {
            return (0, ActiveCrew_1.crewActives)(':Mark');
        }
        else if (param == ':Victor') {
            return (0, ActiveCrew_1.crewActives)(':Victor');
        }
        else if (param == ':Anousheh') {
            return (0, ActiveCrew_1.crewActives)(':Anousheh');
        }
    };
    res.render('pages/crew', {
        allCrews: crewFun(),
        active: crewActive(),
        background: (0, ActiveMenu_1.background)('/crew:')
    });
};
exports.crews = crews;
