import { createUser, findUsers, deletUser, updateUser } from '../controller';
import { Router } from 'express';

const router: Router = Router();

router.post('/createUser', createUser);
router.get('/findUsers', findUsers);
router.delete('/deletUser/:id', deletUser);
router.put('/users/:id', updateUser);

export default router;