import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
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

export const modifyEntry = async (
	originalName,
	specie,
	nom,
	naissance,
	sexe,
	type,
	statut,
	description
) => {
	let database = await getFromDatabase(collec);

	for (let i = 0; i < database[0][specie].length; i++) {
		if (database[0][specie][i].name === originalName) {
			database[0][specie][i].name = nom;
			database[0][specie][i].naissance = naissance;
			database[0][specie][i].sexe = sexe;
			database[0][specie][i].type = type;
			database[0][specie][i].statut = statut;
			database[0][specie][i].description = description;
		}
	}

	updateDatabase(database[0]);
};
