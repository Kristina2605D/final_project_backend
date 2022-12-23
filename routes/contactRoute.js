import  express  from 'express';
import { postContact } from '../controllers/contactController.js';


const router = express.Router();
router.post('/contact', postContact);

export default router;