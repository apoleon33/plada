import { PASSWORD } from '$env/static/private';
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const enteredPassword = data.get('password');

		return { success: enteredPassword === PASSWORD };
	}
};
