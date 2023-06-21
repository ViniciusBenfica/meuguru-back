import formateResponse from '../helpers/formateResponse';
import { addUser, findUserByEmail, findManyUser, deleteUser, findUserById } from '../repository';
import { IFormateResponse } from '../types/IformateResponse';
import { IUser } from '../types/Iuser';

export const createUserService = async (body: IUser): Promise<IFormateResponse> => {
	try {
		const existingUser = await findUserByEmail(body.email);
		if(existingUser) {
			return formateResponse(null, 409, { details: 'User already exists' });
		}
		const newUser = await addUser(body);
		return formateResponse(newUser, 201);
	} catch(error) {
		return formateResponse(null, 500, { details: 'Internal server error' });
	}
};

export const findUserService = async (page: number, limit: number, name: string, email:string): Promise<IFormateResponse> => {
	try {
		const usersList = await findManyUser(page, limit, name, email);
		return formateResponse(usersList, 200);
	} catch(error) {
		return formateResponse(null, 500, { details: 'Internal server error' });
	}
};

export const deleteUserService = async (id: number): Promise<IFormateResponse> => {
	try {
		const existingUser = await findUserById(id);
		if(!existingUser) {
			return formateResponse(null, 409, { details: 'User not exists' });
		}
		const userDelete = await deleteUser(id);
		return formateResponse(userDelete, 200);
	} catch(error) {
		return formateResponse(null, 500, { details: 'Internal server error' });
	}
};