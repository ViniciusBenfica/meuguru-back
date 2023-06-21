import formateResponse from '../helpers/formateResponse';
import {
	addUser,
	findUser
} from '../repository';
import { IFormateResponse } from '../types/IformateResponse';
import { IUser } from '../types/Iuser';

export const createUserService = async (body: IUser): Promise<IFormateResponse> => {
	try {
		const existingUser = await findUser(body.email);
		if(existingUser) {
			return formateResponse(null, 409, { details: 'User already exists' });
		}
		const newUser = await addUser(body);
		return formateResponse(newUser, 201);
	} catch (error) {
		return formateResponse(null, 500, { details: 'Internal server error' });
	}
};