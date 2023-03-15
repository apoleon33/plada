import { PASSWORD } from '$env/static/private';
import { modifyEntry } from '$lib/database.server.js';
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const originalName = data.get('originalName');
		const specie = data.get('animalSpecie');
		const nom = data.get('nom');
		const naissance = data.get('naissance');
		const sexe = data.get('sexe');
		const type = data.get('type');
		const statut = data.get('statut');
		const description = data.get('description');

		const enteredPassword = data.get('password');
		if (enteredPassword === PASSWORD) {
			modifyEntry(originalName, specie, nom, naissance, sexe, type, statut, description);
		}

		return {
			success: enteredPassword === PASSWORD,
			data: { originalName: originalName, specie: specie, nom: nom, naissance: naissance }
		};
	}
};
