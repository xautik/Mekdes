let firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebaseConfig.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();