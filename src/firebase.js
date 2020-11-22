import firebase from 'firebase'

const prod = {
    apiKey: "AIzaSyDpSCv4IYCRntPRtNnO1AcESMgGWY2h3A0",
    authDomain: "boncuisine-staging-55ebd.firebaseio.com",
    databaseURL: "https://boncuisine-staging-55ebd.firebaseio.com",
    projectId: "boncuisine-staging-55ebd",
    storageBucket: "boncuisine-staging-55ebd.appspot.com",
    messagingSenderId: "346385933885",
  };
  const dev = {
    apiKey: "AIzaSyDpSCv4IYCRntPRtNnO1AcESMgGWY2h3A0",
    authDomain: "boncuisine-staging-55ebd.firebaseio.com",
    databaseURL: "https://boncuisine-staging-55ebd.firebaseio.com",
    projectId: "boncuisine-staging-55ebd",
    storageBucket: "boncuisine-staging-55ebd.appspot.com",
    messagingSenderId: "346385933885",
  };
  let config;
  if (process.env.NODE_ENV === "production") {
    config = prod;
  } else {
    config = dev;
  }
  firebase.initializeApp(config);
  // const db = fire.firestore();
  export default firebase;
  
 
