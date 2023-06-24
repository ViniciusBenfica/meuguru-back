import { checkSchema } from 'express-validator';

export const createUserValidation = checkSchema({
	name: {
		notEmpty: {
			errorMessage: 'O campo \'name\' é obrigatório.',
		},
		isLength: {
			errorMessage: 'O campo \'name\' deve ter pelo menos 1 caractere.',
			options: { min: 1 },
		},
	},
	email: {
		notEmpty: {
			errorMessage: 'O campo \'email\' é obrigatório.',
		},
		isEmail: {
			errorMessage: 'Formato de email inválido.',
		},
	},
	password: {
		notEmpty: {
			errorMessage: 'O campo \'password\' é obrigatório.',
		},
		isLength: {
			errorMessage: 'O campo \'password\' deve ter pelo menos 1 caractere.',
			options: { min: 1 },
		},
	},
});