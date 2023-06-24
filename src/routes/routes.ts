import { createUser, findUsers, deletUser, updateUser } from '../controller';
import { Router } from 'express';

const router: Router = Router();

router.post('/createUser', createUser);
router.get('/findUsers', findUsers);
router.delete('/deleteUser/:id', deletUser);
router.put('/updateUser/:id', updateUser);

export default router;