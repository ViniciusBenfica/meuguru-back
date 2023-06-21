import {
	createUser,
} from '../controller';
import { Router } from 'express';

const router: Router = Router();

router.post('/createUser', createUser);

export default router;