import { checkSchema } from 'express-validator';

export const createUserValidation = checkSchema({
	name: {
		notEmpty: {
			errorMessage: 'The \'name\' field is required.',
		},
		isLength: {
			errorMessage: 'The \'name\' field must be at least 1 character long.',
			options: { min: 3 },
		},
	},
	email: {
		notEmpty: {
			errorMessage: 'The \'email\' field is required.',
		},
		isEmail: {
			errorMessage: 'Invalid email format.',
		},
	},
	password: {
		notEmpty: {
			errorMessage: 'The \'password\' field is required.',
		},
		isLength: {
			errorMessage: 'The \'password\' field must be at least 1 character long.',
			options: { min: 1 },
		},
	},
});

export const deleteUserValidation = checkSchema({
	id: {
		notEmpty: {
			errorMessage: 'The \'id\' parameter is required.',
		},
		isNumeric: {
			errorMessage: 'The \'id\' parameter must be a number.',
		},
	},
});

export const updateUserValidation = checkSchema({
	id: {
		notEmpty: {
			errorMessage: 'The \'id\' parameter is required.',
		},
		isNumeric: {
			errorMessage: 'The \'id\' parameter must be a number.',
		},
	},
	name: {
		notEmpty: {
			errorMessage: 'The \'name\' field is required.',
		},
		isLength: {
			errorMessage: 'The \'name\' field must be at least 1 character long.',
			options: { min: 3 },
		},
	},
	email: {
		notEmpty: {
			errorMessage: 'The \'email\' field is required.',
		},
		isEmail: {
			errorMessage: 'Invalid email format.',
		},
	},
});
