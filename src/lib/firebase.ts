import { initializeApp } from 'firebase/app';
// import * as firebase from 'firebase/app';
import { getFirestore, collection, getDocs, orderBy, query, addDoc, doc, setDoc } from 'firebase/firestore/lite';
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
// import Constants from 'expo-constants';
// types
import { Content } from '../types/content'
import { User, initialUser } from '../types/user';
import { Review } from "../types/review";

const firebaseConfig = {
    apiKey: "AIzaSyDCiAyghu3sJRDkESYFqj2P_cHPqCK4KUM",
    authDomain: "gs-product-2201.firebaseapp.com",
    projectId: "gs-product-2201",
    storageBucket: "gs-product-2201.appspot.com",
    messagingSenderId: "521751296039",
    appId: "1:521751296039:web:f788769e41de4f8fa6f602",
    measurementId: "G-EVVYB907ZC"
};

const app = initializeApp(firebaseConfig);
// const app = initializeApp(Constants.manifest.extra.firebase);
// firebase.initializeApp(Constants.manifest.extra.firebase);
const db = getFirestore(app);

export const getContents = async () => {
    // firebaseが該当しないので書き換え
    // const snapshot = await firebase.firestore().collection("contents").get();

    const dataCol = query(
        collection(db, 'contents'),
        // orderBy('score_fb', 'desc')
    );
    const snapshot = await getDocs(dataCol);
    const contents = snapshot.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id } as Content)
    );
    // console.log(contents);
    return contents;
};

const auth = getAuth();
const user = auth.currentUser;

export const signin = async () => {
    signInAnonymously(auth)
        .then(() => {
            // Signed in..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });
    onAuthStateChanged(auth, (user) => {
        if (user !== null) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log(uid);
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
};

export const addReview = async (contentId: string, review: Review) => {
    // await firebase
    //     .firestore()
    //     .collection("shops")
    //     .doc(shopId)
    //     .collection("reviews")
    //     .add(review);

    const Ref = doc(collection(db, "contents"));
    // 入力したコンテンツIDの中にreviewsを入れたい
    // const idknow= (doc) => ({ ...doc.data(), id: doc.id } as Review)
    const newRef = doc(collection(Ref, "reviews"));
    // このデータはレビューのテキストとスコアが渡るようにしたい
    const data = {
        contentId: "",
        review: "",
    };
    await setDoc(newRef, data);
};

// export const signin = async () => {
//     const userCredential = await firebase.auth().signInAnonymously();
//     const { uid } = userCredential.user;
//     const userDoc = await firebase.firestore().collection("users").doc(uid).get();
//     if (!userDoc.exists) {
//         await firebase.firestore().collection("users").doc(uid).set(initialUser);
//         return {
//             ...initialUser,
//             id: uid,
//         } as User;
//     } else {
//         return {
//             id: uid,
//             ...userDoc.data(),
//         } as User;
//     }
// };

