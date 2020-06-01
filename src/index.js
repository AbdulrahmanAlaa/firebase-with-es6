// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCoaTp10TqHbytWWdgpijc0hgQi_B1MW14',
  authDomain: 'itigis-1492244512224.firebaseapp.com',
  databaseURL: 'https://itigis-1492244512224.firebaseio.com',
  projectId: 'itigis-1492244512224',
  storageBucket: 'itigis-1492244512224.appspot.com',
  messagingSenderId: '664404404637',
  appId: '1:664404404637:web:20dd3635c140723818a774',
};

const app = firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database(app);

// // Get a reference to the root of the Database
// var rootRef = firebase.database().ref();

// rootRef.once('value',console.log)

const ref = database.ref('users');
ref.on('value', (snapshot) => {
  console.log(snapshot)
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    console.log(childKey,childData)
  });
});
`