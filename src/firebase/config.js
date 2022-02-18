import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAI1YxMPZvZOG43QyzOKJj_6gyshsZv-mg",
	authDomain: "images-store-602a5.firebaseapp.com",
	projectId: "images-store-602a5",
	// databaseURL: 'gs://images-store-602a5.appspot.com',
	storageBucket: "images-store-602a5.appspot.com",
	messagingSenderId: "1096750066156",
	appId: "1:1096750066156:web:ad0800984582fb59cbf8c9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);


