import { getFromDatabase, getUrl } from '$lib/database.server.js';
let database = await getFromDatabase('animaux');

export async function load({ params }) {
	let listImagePromises = [];
	let listImageAnimalsPromises = [];
	let listImage = [];
	let listImageAnimals = [];
	let animalInformations = database[0][params.animal][params.id];

	listImagePromises.push(getUrl(animalInformations.link));

	for (let i = 0; i < animalInformations.additionnalPhoto.length; i++) {
		listImagePromises.push(getUrl(animalInformations.additionnalPhoto[i]));
	}

	for (let i = 0; i < database[0][params.animal].length; i++) {
		//console.log(database[0][params.animal][i].link);
		listImageAnimalsPromises.push(getUrl(database[0][params.animal][i].link));
	}

	listImage = await Promise.all(listImagePromises);
	listImageAnimals = await Promise.all(listImageAnimalsPromises);

	return {
		animal: params.animal,
		id: params.id,
		donnee: animalInformations,
		recommendation: database[0][params.animal],
		images: listImage,
		otherImages: listImageAnimals
	};
}
