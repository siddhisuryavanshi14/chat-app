import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyDGjpzuhCSOvM78-1gokil93N3gZNluRJ8',
  authDomain: 'chat-web-app-123.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-123-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-123',
  storageBucket: 'chat-web-app-123.appspot.com',
  messagingSenderId: '295104117522',
  appId: '1:295104117522:web:5d717a39e984f0fa7211cb',
};

const app = firebase.initializeApp(config);
