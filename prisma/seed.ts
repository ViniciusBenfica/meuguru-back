import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
	await prisma.user.upsert({
		where: { email: 'alice@prisma.io' },
		update: {},
		create: {
			email: 'alice@prisma.io',
			name: 'Alice',
			password: '123'
		},
	});
	await prisma.user.upsert({
		where: { email: 'bob@prisma.io' },
		update: {},
		create: {
			email: 'bob@prisma.io',
			name: 'Bob',
			password: '123'
		},
	});
	await prisma.user.upsert({
		where: { email: 'vinicius@prisma.io' },
		update: {},
		create: {
			email: 'vinicius@prisma.io',
			name: 'vinicius',
			password: '123'
		},
	});
	await prisma.user.upsert({
		where: { email: 'joana@prisma.io' },
		update: {},
		create: {
			email: 'joana@prisma.io',
			name: 'joana',
			password: '123'
		},
	});
	await prisma.user.upsert({
		where: { email: 'jonh@prisma.io' },
		update: {},
		create: {
			email: 'jonh@prisma.io',
			name: 'jonh',
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