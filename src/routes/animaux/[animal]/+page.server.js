import { getFromDatabase } from '$lib/database.server.js';
let database = await getFromDatabase('animaux');
export function load({ params }) {
	return {
		id: params.animal,
		db: database[0][params.animal]
	};
}
