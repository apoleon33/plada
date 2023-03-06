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

export const updateDatabase = async (collec, id, newData) => {
	const dbRef = doc(database, collec, id);
	await updateDoc(dbRef, newData);
};

export const getUrl = async (pathName) => {
	const url = await getDownloadURL(ref(storageRef, pathName));
	return url;
};
