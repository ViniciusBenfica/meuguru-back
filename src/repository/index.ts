import { PrismaClient } from '@prisma/client';
import { User } from '@prisma/client';
import { IUser } from '../types/Iuser';

const prisma = new PrismaClient();

export const addUser = async (user: IUser): Promise<User> => {
	const userResponse = await prisma.user.create({
		data: { ...user },
	});
	return userResponse;
};

export const findUser = async (userEmail: string): Promise<User | null> => {
	const userResponse = await prisma.user.findUnique({
		where: {
			email: userEmail
		}
	});
	return userResponse;
};