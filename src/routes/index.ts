import { Router } from 'express';
import { home,destination, crew, technology,} from '../controllers/homeController';
import { destinations} from '../controllers/PlanetsController';
import { crews } from '../controllers/crewController';
import { technologyController } from '../controllers/TechnologyController';


const router = Router();

router.get('/', home)

router.get('/destination', destination )
router.get('/crew', crew)
router.get('/technology', technology)


router.get('/destination:destinations', destinations)
router.get('/technology:technologys', technologyController)
router.get('/crew:crews', crews )


export default router;