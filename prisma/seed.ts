import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
	await prisma.user.upsert({
		where: { email: 'alice@gmail.com' },
		update: {},
		create: {
			email: 'alice@gmail.com',
			name: 'Alice',
			password: '123'
		},
	});
	await prisma.user.upsert({
		where: { email: 'bob@gmail.com' },
		update: {},
		create: {
			email: 'bob@gmail.com',
			name: 'Bob',
			password: '123'
		},
	});
	await prisma.user.upsert({
		where: { email: 'vinicius@gmail.com' },
		update: {},
		create: {
			email: 'vinicius@gmail.com',
			name: 'vinicius',
			password: '123'
		},
	});
	await prisma.user.upsert({
		where: { email: 'joana@gmail.com' },
		update: {},
		create: {
			email: 'joana@gmail.com',
			name: 'joana',
			password: '123'
		},
	});
	await prisma.user.upsert({
		where: { email: 'jonh@gmail.com' },
		update: {},
		create: {
			email: 'jonh@gmail.com',
			name: 'jonh',
			password: '123'
		},
	});
	await prisma.user.upsert({
		where: { email: 'emma@gmail.com' },
		update: {},
		create: {
			email: 'emma@gmail.com',
			name: 'Emma',
			password: '123'
		},
	});

	await prisma.user.upsert({
		where: { email: 'oliver@gmail.com' },
		update: {},
		create: {
			email: 'oliver@gmail.com',
			name: 'Oliver',
			password: '123'
		},
	});

	await prisma.user.upsert({
		where: { email: 'sophia@gmail.com' },
		update: {},
		create: {
			email: 'sophia@gmail.com',
			name: 'Sophia',
			password: '123'
		},
	});

	await prisma.user.upsert({
		where: { email: 'noah@gmail.com' },
		update: {},
		create: {
			email: 'noah@gmail.com',
			name: 'Noah',
			password: '123'
		},
	});

	await prisma.user.upsert({
		where: { email: 'mia@gmail.com' },
		update: {},
		create: {
			email: 'mia@gmail.com',
			name: 'Mia',
			password: '123'
		},
	});

	await prisma.user.upsert({
		where: { email: 'william@gmail.com' },
		update: {},
		create: {
			email: 'william@gmail.com',
			name: 'William',
			password: '123'
		},
	});

	await prisma.user.upsert({
		where: { email: 'ava@gmail.com' },
		update: {},
		create: {
			email: 'ava@gmail.com',
			name: 'Ava',
			password: '123'
		},
	});

	await prisma.user.upsert({
		where: { email: 'liam@gmail.com' },
		update: {},
		create: {
			email: 'liam@gmail.com',
			name: 'Liam',
			password: '123'
		},
	});

	await prisma.user.upsert({
		where: { email: 'isabella@gmail.com' },
		update: {},
		create: {
			email: 'isabella@gmail.com',
			name: 'Isabella',
			password: '123'
		},
	});

	await prisma.user.upsert({
		where: { email: 'ethan@gmail.com' },
		update: {},
		create: {
			email: 'ethan@gmail.com',
			name: 'Ethan',
			password: '123'
		},
	});

}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});