import React,{useState} from "react";
import  {auth}  from "../backend/Firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
  


const FirebaseContext=React.createContext();


 function AuthProvider({children}) 
{
    const [errors, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
    // inscription
    const signupUser= async(email,password)=>
    {
        try 
        {
            let user=await createUserWithEmailAndPassword(auth,email,password)
            console.log(user);
        } catch (error) 
        {
            setError(!errors)
            setErrorMessage(error.message);
           
        }
        
       

    };

        // Connexion
    const loginUser=(email,password)=>
    {
    //     const auth=getAuth(Firebase);
    //    return signInWithEmailAndPassword(auth,email,password)

    }
    //deconnection 
    const signOutUser=()=>
    {
        // const auth = getAuth();
        // return signOut(auth);
    } 
   
    return(
        <FirebaseContext.Provider value={{signupUser,loginUser,signOutUser,errors,errorMessage}}>
            {children}
        </FirebaseContext.Provider>
    )
}

export  {FirebaseContext,AuthProvider};
