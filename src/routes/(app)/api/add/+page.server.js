import { PASSWORD } from '$env/static/private';
import { addNewEntry, addImageToDatabase } from '$lib/database.server.js';
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

		const mainImage = data.get('icon');
		const additionnalImages = data.getAll('additionnalPhotos');

		const newAnimal = {
			name: nom,
			naissance: naissance,
			sexe: sexe,
			type: type,
			statut: statut,
			description: description,
			link: `${specie}/default.png`,
			additionnalPhoto: [`${specie}/default.png`]
		};

		if (mainImage.size !== 0) {
			newAnimal.link = `${specie}/${nom}/${mainImage.name}`;
			addImageToDatabase(
				await mainImage.arrayBuffer(),
				`${specie}/${nom}/${mainImage.name}`,
				mainImage.type
			);
		}

		if (additionnalImages.length !== 0) {
			for (let i = 0; i < additionnalImages.length; i++) {
				newAnimal.additionnalPhoto.push(`${specie}/${nom}/${additionnalImages[i].name}`);
				addImageToDatabase(
					await additionnalImages[i].arrayBuffer(),
					`${specie}/${nom}/${additionnalImages[i].name}`,
					additionnalImages[i].type
				);
			}
		}

		const enteredPassword = data.get('password');
		if (enteredPassword === PASSWORD) {
			addNewEntry(newAnimal, specie);
		}

		return {
			success: enteredPassword === PASSWORD,
			data: { originalName: originalName, specie: specie, nom: nom, naissance: naissance }
		};
	}
};
