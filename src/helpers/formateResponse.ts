import { IFormateResponse } from '../types/IformateResponse';

const formateResponse = (
	data: any,
	statusCode: number,
	error?: { details: string },
): IFormateResponse => {
	return {
		payload: data,
		statusCode: statusCode,
		error: { ...error },
	};
};

export default formateResponse;
