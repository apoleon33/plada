import { getFromDatabase, getUrl } from '$lib/database.server.js';

// let imageIcon = await getUrl(`${params.animal}`);
export async function load({ params }) {
	const animalType = ['chats', 'chiens', 'autres'];
	let database = await getFromDatabase('animaux');

	let listImagePromises = [];
	let listImage = [];
	//console.log(database[0]);

	let db = [];

	for (let index = 0; index < animalType.length; index++) {
		let actualAnimalList = database[0][animalType[index]];
		for (let i = 0; i < actualAnimalList.length; i++) {
			let animalDatas = actualAnimalList[i];
			animalDatas.specie = animalType[index];
			db.push(animalDatas);
		}
	}

	for (let i = 0; i < db.length; i++) {
		listImagePromises.push(getUrl(db[i].link));
	}

	listImage = await Promise.all(listImagePromises);

	return {
		db: db,
		listImage: listImage
	};
}
