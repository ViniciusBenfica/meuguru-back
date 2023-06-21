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

export const findUserByEmail = async (userEmail: string): Promise<User | null> => {
	const userResponse = await prisma.user.findUnique({
		where: {
			email: userEmail
		}
	});
	return userResponse;
};

export const findManyUser = async (page: number, limit: number, name: string, email: string): Promise<User[] | null> => {
	const userResponse = await prisma.user.findMany({
		where: {
			name: { contains: name },
			email: { contains: email },
		},
		skip: (page - 1) * limit,
		take: limit,
	});
	return userResponse;
};
  
export const findUserById = async (id: number): Promise<User | null> => {
	const userResponse = await prisma.user.findUnique({
		where: { id }
	});
	return userResponse;
};

export const deleteUser = async (id: number): Promise<User> => {
	const userResponse = await prisma.user.delete({
		where: { id },
	});
	return userResponse;
};
  