import { createUser, findUsers, deletUser } from '../controller';
import { Router } from 'express';

const router: Router = Router();

router.post('/createUser', createUser);
router.get('/findUsers', findUsers);
router.delete('/deletUser/:id', deletUser);

export default router;