import React,{useState} from "react";
import  {auth,db}  from "../backend/Firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail} from "firebase/auth";
//   create the database with firebase
import {doc,setDoc,getDoc} from 'firebase/firestore'


const FirebaseContext=React.createContext();


 function AuthProvider({children}) 
{
    console.log(doc)
    const [userEmail, setUserEmail] = useState("v");

    // inscription
    const signupUser=(email,password)=> createUserWithEmailAndPassword(auth,email,password)
             

    // Connexion
        
    const loginUser=  (email,password)=> signInWithEmailAndPassword(auth,email,password); 

    
    //deconnection 
    const signOutUser=()=> signOut(auth);

    // connection in the database

    const userDB=(uid)=>doc(db,`users/${uid}`);
     
   
    return(
        <FirebaseContext.Provider value={
            {
                signupUser,loginUser,
                signOutUser,onAuthStateChanged,
                userEmail,
                sendPasswordResetEmail,auth,
                db,userDB,setDoc,getDoc
            }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export  {FirebaseContext,AuthProvider};
