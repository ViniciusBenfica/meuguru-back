import { Request, Response } from 'express';
import { createUserService, findUserService, deleteUserService, updateUserService } from '../service';
import { validationResult } from 'express-validator';

export const createUser = async (req: Request, res: Response): Promise<Response> => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { body } = req;
	const user = await createUserService(body);
	return res.status(user.statusCode).json(user);
};

export const findUsers = async (req: Request, res: Response): Promise<Response> => {
	const { page = 1, limit = 2, search = '' } = req.query;
	const users = await findUserService(Number(page), Number(limit), search as string);
	return res.status(users.statusCode).json(users);
};

export const deletUser = async (req: Request, res: Response): Promise<Response> => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { id } = req.params;
	const users = await deleteUserService(Number(id));
	return res.status(users.statusCode).json(users);
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { id } = req.params;
	const { name, email } = req.body;
	const users = await updateUserService(Number(id), name, email);
	return res.status(users.statusCode).json(users);
};