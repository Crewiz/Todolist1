import { initializeApp } from 'firebase/app';

import {
  getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD1u47dM1n2Bno67zmbzKD_Bc5MqBVtNCY",
    authDomain: "todolist-final-9becc.firebaseapp.com",
    projectId: "todolist-final-9becc",
    storageBucket: "todolist-final-9becc.appspot.com",
    messagingSenderId: "221193472880",
    appId: "1:221193472880:web:77aa1b89d43c6aa3201db5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db