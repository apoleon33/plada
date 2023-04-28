import { PASSWORD } from '$env/static/private';
import { removeEntry, modifyEntry } from '$lib/database.server.js';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const specie = data.get('specie');
		const animalId = data.get('animalId');

		console.log(specie);
		console.log(animalId);

		removeEntry(animalId, specie);

		return {
			data: { specie: specie }
		};
	}
};
