import { PASSWORD } from '$env/static/private';
import { getFromDatabase, getUrl } from '$lib/database.server.js';

export async function load({ params }) {
	let database = await getFromDatabase('animaux');
	let listImageChatPromises = [];
	let listImageChat = [];

	let listImageChiensPromises = [];
	let listImageChiens = [];

	for (let i = 0; i < database[0].chats.length; i++) {
		listImageChatPromises.push(getUrl(database[0].chats[i].link));
	}

	for (let i = 0; i < database[0].chiens.length; i++) {
		listImageChiensPromises.push(getUrl(database[0].chiens[i].link));
	}
	listImageChat = await Promise.all(listImageChatPromises);
	listImageChiens = await Promise.all(listImageChiensPromises);

	return {
		db: database[0],
		imageChats: listImageChat,
		imageChiens: listImageChiens
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const enteredPassword = data.get('password');

		return { success: enteredPassword === PASSWORD };
	}
};
