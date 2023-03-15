import { initializeApp } from 'firebase/app';
import { Blob, Buffer } from 'node:buffer';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// const blob = new Blob('static/chats/caline/caline3.jpg');

const firebaseConfig = {
	apiKey: 'AIzaSyDdVXAshlVFXW9d9whlM9BscHshEHFt-7A',

	authDomain: 'plada-365b0.firebaseapp.com',

	projectId: 'plada-365b0',

	storageBucket: 'plada-365b0.appspot.com',

	messagingSenderId: '48832165090',

	appId: '1:48832165090:web:5f710e7b0d85d83232dabb'
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const storage = getStorage(app);

const writeToDatabase = async (collec, data) => {
	try {
		const docRef = await addDoc(collection(database, collec), data);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

const getFromDatabase = async (collec) => {
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

await updateDatabase('discovery', 'GBOWuRgcFpDWhZG0gjDo', { essai: "quelque chose d'autresss" });

async function uploadFile(path, filename) {
	return storageRef.upload(path, {
		public: true,
		destination: `/uploads/hashnode/${filename}`,
		metadata: {
			firebaseStorageDownloadTokens: uuidv4()
		}
	});
}

const storageRef = ref(storage);
const chatsRef = ref(storageRef, 'chats/caline/caline3.jpg');

const getUrl = async (pathName) => {
	const url = await getDownloadURL(ref(storageRef, pathName));
	return url;
};

/*// 'file' comes from the Blob or File API
uploadBytes(chatsRef, blob).then((snapshot) => {
	console.log('Uploaded a blob or file!');
});*/
