"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeController_1 = require("../controllers/homeController");
const PlanetsController_1 = require("../controllers/PlanetsController");
const crewController_1 = require("../controllers/crewController");
const TechnologyController_1 = require("../controllers/TechnologyController");
const router = (0, express_1.Router)();
router.get('/', homeController_1.home);
router.get('/destination', homeController_1.destination);
router.get('/crew', homeController_1.crew);
router.get('/technology', homeController_1.technology);
router.get('/destination:destinations', PlanetsController_1.destinations);
router.get('/technology:technologys', TechnologyController_1.technologyController);
router.get('/crew:crews', crewController_1.crews);
exports.default = router;
