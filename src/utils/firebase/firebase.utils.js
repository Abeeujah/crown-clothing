// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {
    doc,
    getDoc,
    setDoc,
    getFirestore,
    collection,
    writeBatch,
    query,
    getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlIhyLv--KZEeeuIZE6PY4ArQS9MOJfro",
    authDomain: "crown-clothing-8b9bb.firebaseapp.com",
    projectId: "crown-clothing-8b9bb",
    storageBucket: "crown-clothing-8b9bb.appspot.com",
    messagingSenderId: "467740713967",
    appId: "1:467740713967:web:89525df6a8331a91bc4c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// OAuth Setup..
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Init DB Instance..
export const db = getFirestore();

// Save Documents to DB..
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
};

// Get Documents From DB..
export const getCategoriesAndDocuments = async () => {
    // Collection to be Queried
    const collectionRef = collection(db, 'categories');
    // Query Instance q
    const q = query(collectionRef);
    // Get Docs from DB
    const querySnapshot = await getDocs(q);
    // Reduce to desired Structure..
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

// Save Authenticated User..
export const createUserDocumentFromAuth = async (user, extra = {}) => {
    const userDocRef = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = user;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...extra
            });
        } catch (error) {
            console.log('Error Creating New User', error.message);
        }
    }
    return userDocRef;
}

// Auth Using Email and Password..
export const createAuthUserWithEmailandPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailandPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

// Sign Out Authenticated User..
export const signOutAuthUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    (onAuthStateChanged(auth, callback));
