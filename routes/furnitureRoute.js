import  express  from 'express';
import { getFurnitures, postFurniture } from '../controllers/FurnitureController.js';


const router = express.Router();
router.get('/', getFurnitures);
router.post('/',postFurniture);

export default router;