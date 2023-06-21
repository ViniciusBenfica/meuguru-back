import { Request, Response } from 'express';
import { createUserService, findUserService, deleteUserService, updateUserService } from '../service';

export const createUser = async (req: Request, res: Response): Promise<Response> => {
	const { body } = req;
	const user = await createUserService(body);
	return res.status(user.statusCode).json(user);
};

export const findUsers = async (req: Request, res: Response): Promise<Response> => {
	const { page = 1, limit = 10, name = '', email = '' } = req.query;
	const users = await findUserService(Number(page), Number(limit), name as string, email as string);
	return res.status(users.statusCode).json(users);
};

export const deletUser = async (req: Request, res: Response): Promise<Response> => {
	const { id } = req.params;
	const users = await deleteUserService(Number(id));
	return res.status(users.statusCode).json(users);
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
	const { id } = req.params;
	const { name, email } = req.body;
	const users = await updateUserService(Number(id), name, email);
	return res.status(users.statusCode).json(users);
};