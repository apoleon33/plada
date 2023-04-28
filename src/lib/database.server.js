import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import {
	getStorage,
	ref,
	getDownloadURL,
	uploadBytes,
	connectStorageEmulator
} from 'firebase/storage';
import {
	API_KEY,
	AUTH_DOMAIN,
	PROJECT_ID,
	STORAGE_BUCKET,
	MESSAGING_SENDER_ID,
	APP_ID
} from '$env/static/private';

const databaseAnimauxId = '6tmYmfi6J5OERWNandvK';
const collec = 'animaux';

const firebaseConfig = {
	apiKey: API_KEY,

	authDomain: AUTH_DOMAIN,

	projectId: PROJECT_ID,

	storageBucket: STORAGE_BUCKET,

	messagingSenderId: MESSAGING_SENDER_ID,

	appId: APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const storage = getStorage(app);
const storageRef = ref(storage);

const removeItemOnce = (arr, value) => {
	var index = arr.indexOf(value);
	if (index > -1) {
		arr.splice(index, 1);
	}
	return arr;
};

export const writeToDatabase = async (collec, data) => {
	try {
		const docRef = await addDoc(collection(database, collec), data);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getFromDatabase = async (collec) => {
	const querySnapshot = await getDocs(collection(database, collec));
	let document = [];
	querySnapshot.forEach((doc) => {
		document.push(doc.data());
	});
	return document;
};

const updateDatabase = async (newData) => {
	const dbRef = doc(database, collec, databaseAnimauxId);
	await updateDoc(dbRef, newData);
};

export const getUrl = async (pathName) => {
	const url = await getDownloadURL(ref(storageRef, pathName));
	return url;
};

export const modifyEntry = async (newEntry, originalName, specie, imagesToRemove) => {
	let database = await getFromDatabase(collec);
	/* forme de database
	[
  		{
    		chats: [
      			[Object], [Object],
      			[Object], [Object],
      			[Object], [Object],
      			[Object]
    		],
    		chiens: [ [Object] ],
    		autres: []
  		}
	]
	*/

	for (let i = 0; i < database[0][specie].length; i++) {
		if (database[0][specie][i].name === originalName) {
			database[0][specie][i].name = newEntry.name;
			database[0][specie][i].naissance = newEntry.naissance;
			database[0][specie][i].sexe = newEntry.sexe;
			database[0][specie][i].type = newEntry.type;
			database[0][specie][i].statut = newEntry.statut;
			database[0][specie][i].description = newEntry.description;

			if (newEntry.link !== 0) {
				database[0][specie][i].link = newEntry.link;
			}

			if (newEntry.additionnalPhoto.length > 0) {
				for (let y = 0; y < newEntry.additionnalPhoto.length; y++) {
					database[0][specie][i].additionnalPhoto.push(newEntry.additionnalPhoto[y]);
				}
			}

			for (let y = 0; y < imagesToRemove.length; y++) {
				database[0][specie][i].additionnalPhoto = removeItemOnce(
					database[0][specie][i].additionnalPhoto,
					imagesToRemove[y]
				);
			}
		}
	}

	updateDatabase(database[0]);
	console.log('done!');
};

export const addNewEntry = async (newEntry, specie) => {
	let database = await getFromDatabase(collec);

	let rowToAdd = newEntry;
	rowToAdd.id = database[0][specie].length;
	database[0][specie].push(newEntry);
	updateDatabase(database[0]);
};

export const addImageToDatabase = async (file, pathName, fileType) => {
	let newRef = ref(storageRef, pathName);
	let byteFile = new Uint8Array(file);

	const metadata = {
		contentType: fileType
	};

	uploadBytes(newRef, byteFile, metadata).then((snapshot) => {
		console.log(`Uploaded a blob or file at ${newRef.fullPath}`);
	});
};

export const removeEntry = async (id, specie) => {
	let database = await getFromDatabase(collec);

	console.log(database[0][specie].length);
	console.log(`id du chat: ${id}`);

	for (let i = 0; i < database[0][specie].length; i++) {
		if (database[0][specie][i].id == id) {
			database[0][specie].splice(i, 1);
			console.log(database[0][specie]);
			break;
		}
	}

	updateDatabase(database[0]);
};
