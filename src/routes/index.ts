import { Router } from 'express';
import { home,destination, crew, technology,} from '../controllers/homeController';
import { europa, mars, moon, titan } from '../controllers/PlanetsController';


const router = Router();

router.get('/', home)

router.get('/destination', destination )

router.get('/crew', crew)

router.get('/technology', technology)

router.get('/destination:moon', moon)

router.get('/destination:mars', mars)

router.get('/destination:europa', europa)

router.get('/destination:titan', titan)





export default router;