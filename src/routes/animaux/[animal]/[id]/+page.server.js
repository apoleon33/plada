import { getFromDatabase } from '$lib/database.server.js';
let database = await getFromDatabase('animaux');

export function load({ params }) {
	return {
		animal: params.animal,
		id: params.id,
		donnee: database[0][params.animal][params.id],
		recommendation: database[0][params.animal]
	};
}
