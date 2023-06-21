import { createUser, findUsers} from '../controller';
import { Router } from 'express';

const router: Router = Router();

router.post('/createUser', createUser);
router.get('/findUsers', findUsers);

export default router;