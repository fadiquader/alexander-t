import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAst29nr5dv9nO7YivCp40camezGMLXqyI",
    authDomain: "alexander-452e1.firebaseapp.com",
    databaseURL: "https://alexander-452e1.firebaseio.com",
    projectId: "alexander-452e1",
    storageBucket: "",
    messagingSenderId: "667435927051"
};

firebase.initializeApp(config);

export function insert(path, data) {
  return database.ref(path).set(data);
}
export const database = firebase.database();
