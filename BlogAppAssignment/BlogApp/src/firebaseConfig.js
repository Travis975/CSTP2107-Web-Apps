// firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, deleteDoc, getDocs, collection, query, where } from "@firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Add a blog to the user's favorites
export const addToFavorites = async (blog) => {
    if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const favDocRef = doc(db, 'favorites', `${userId}_${blog.id}`);
        await setDoc(favDocRef, { userId, ...blog });
        console.log('Blog added to favorites');
    } else {
        console.error('User not authenticated');
    }
};

// Remove a blog from the user's favorites
export const removeFromFavorites = async (blogId) => {
    if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const favDocRef = doc(db, 'favorites', `${userId}_${blogId}`);
        await deleteDoc(favDocRef);
        console.log('Blog removed from favorites');
    } else {
        console.error('User not authenticated');
    }
};

// Fetch the user's favorite blogs
export const fetchFavorites = async () => {
    if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const q = query(collection(db, 'favorites'), where('userId', '==', userId));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data());
    } else {
        console.error('User not authenticated');
        return [];
    }
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export { auth, db };