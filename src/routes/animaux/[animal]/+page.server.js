import { getFromDatabase, getUrl } from '$lib/database.server.js';

// let imageIcon = await getUrl(`${params.animal}`);
export async function load({ params }) {
	let database = await getFromDatabase('animaux');
	let listImagePromises = [];
	let listImage = [];
	let db = database[0][params.animal];

	for (let i = 0; i < db.length; i++) {
		listImagePromises.push(getUrl(db[i].link));
	}

	listImage = await Promise.all(listImagePromises);

	return {
		id: params.animal,
		db: db,
		listImage: listImage
	};
}
