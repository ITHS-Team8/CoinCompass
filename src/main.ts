import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBa3qp7m7yjl4hCuxBtIWF1X9V2Q9A6aw0',

	authDomain: 'coincompass-6904a.firebaseapp.com',

	projectId: 'coincompass-6904a',

	storageBucket: 'coincompass-6904a.appspot.com',

	messagingSenderId: '537841850589',

	appId: '1:537841850589:web:da08c74df4a36ffb15e334',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
