import { PASSWORD } from '$env/static/private';
import { addImageToDatabase, modifyEntry } from '$lib/database.server.js';
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

		const imageToRemoveLength = data.get('imageToRemoveLength');

		let modifiedData = {
			name: nom,
			naissance: naissance,
			sexe: sexe,
			type: type,
			statut: statut,
			description: description,
			link: 0,
			additionnalPhoto: []
		};

		if (mainImage.size !== 0) {
			modifiedData.link = `${specie}/${nom}/${mainImage.name}`;
			addImageToDatabase(
				await mainImage.arrayBuffer(),
				`${specie}/${nom}/${mainImage.name}`,
				mainImage.type
			);
		}

		if (additionnalImages[0].size !== 0) {
			for (let i = 0; i < additionnalImages.length; i++) {
				modifiedData.additionnalPhoto.push(`${specie}/${nom}/${additionnalImages[i].name}`);
				addImageToDatabase(
					await additionnalImages[i].arrayBuffer(),
					`${specie}/${nom}/${additionnalImages[i].name}`,
					additionnalImages[i].type
				);
			}
		}

		let imageToRemove = [];
		for (let i = 0; i < imageToRemoveLength; i++) {
			imageToRemove.push(data.get(`imageToRemove${i}`));
		}

		const enteredPassword = data.get('password');
		if (enteredPassword === PASSWORD) {
			modifyEntry(modifiedData, originalName, specie, imageToRemove);
		}

		return {
			success: enteredPassword === PASSWORD,
			data: modifiedData
		};
	}
};
