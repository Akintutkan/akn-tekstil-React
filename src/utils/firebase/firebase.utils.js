import {initializeApp} from "firebase/app"
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth"

import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"
import { Await } from "react-router-dom";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjdk1DV68nPFqElvEaKM7GlWNQJpav8r4",
  authDomain: "akn-tekstil.firebaseapp.com",
  projectId: "akn-tekstil",
  storageBucket: "akn-tekstil.appspot.com",
  messagingSenderId: "1027812059667",
  appId: "1:1027812059667:web:bf1d9da07403e7dbb9ede6"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account",
  })
  
  export const auth = getAuth()

  export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)
  export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth,googleProvider);

  export const db = getFirestore() 


  export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
    if(!userAuth) return;
    const userDocRef = doc(db,"users", userAuth.uid)
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists());
    if(!userSnapshot.exists()){
      const{displayName,email} = userAuth
      const createdAt = new Date()
      try {
        await setDoc(userDocRef,{displayName,email,createdAt,...additionalInformation})
      } catch (error) {
        console.log("Kullanıcı hatası",error.message)     
      }
    }
    return userDocRef
  }
  export const createAuthUserWithEmailAndPassword = async(email,password)=>{
    if(!email || !password) return
    return await createUserWithEmailAndPassword(auth,email,password)
  }
  export const signInAuthUserWithEmailAndPassword = async(email,password)=>{
    if(!email || !password) return
    return await signInWithEmailAndPassword(auth,email,password)
  }

  export const signOutUser = () => async () => await signOut(auth);
