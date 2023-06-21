import { Request, Response } from 'express';
import { createUserService } from '../service';

export const createUser = async (req: Request, res: Response): Promise<Response> => {
	const { body } = req;
	const user = await createUserService(body);
	return res.status(user.statusCode).json(user);
};