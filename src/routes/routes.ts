import { createUser, findUsers, deletUser, updateUser } from '../controller';
import { Router } from 'express';
import { createUserValidation, deleteUserValidation, updateUserValidation } from '../schemaValidator/user';

const router: Router = Router();

router.post('/createUser', createUserValidation, createUser);
router.get('/findUsers', findUsers);
router.delete('/deleteUser/:id', deleteUserValidation, deletUser);
router.put('/updateUser/:id', updateUserValidation, updateUser);

export default router;