import React,{useState,useContext,useEffect} from 'react'
import styled from 'styled-components';
import Logout from '../components/welcome/Logout';
import OutLine from '../components/welcome/OutLine';
import Quiz from '../components/welcome/quiz/Quiz';
import  {auth}  from "../backend/Firebase";
import { useHistory } from "react-router-dom";
import {FirebaseContext} from '../backend/FirebaseContexte'


export default function Welcome() 
{
    const firebase = useContext(FirebaseContext);
    const [sessionUser, setSessionUser] = useState(null);
    const [id, setId] = useState({});
    const{onAuthStateChanged,userDB,getDoc}=firebase;

    let history = useHistory();
    useEffect(() => 
    {
        let listener= onAuthStateChanged(auth,user=>
            {
                // setId(user.uid);
                 (user)?setSessionUser(user):history.push("/");
            }); 

            // get the document Database
            if (sessionUser!==null) 
            {
                const docRef=userDB(sessionUser.uid);
                const docSnap = getDoc(docRef);
                docSnap.then(doc=>
                    {
                        if (doc.exists()) 
                        {
                            setId(doc.data())
                        } else 
                        {
                            // doc.data() will be undefined in this case
                             console.log("No such document!");
                        }
                    })
                
            }
            
            // const docSnaps= getDoc(userDB(id));
            // .then(docSnap=>{
            //     if (docSnap.exists()) {
            //                     console.log("Document data :",docSnap.data())
            //                 } else {
            //                     console.log("No such document!");
            //                 }
            // })
            
           
        return () => 
        {
            listener()
        }
    }, [sessionUser]);
    
   

    
   
    
    // const querySnapshot =  getDocs(collection(db, "users"));
    // querySnapshot.then(datas=>{datas.docs.map(doc=>console.log(doc.data()))}) ;


    
    const isOnline=<><Logout /><Quiz id={id} /></>
    const outline=<OutLine />;
    const userConnexion=(sessionUser===null)?outline:isOnline
    return (
        <Container color={sessionUser}>
           {userConnexion}
        </Container>
    )
}

const Container=styled.section`
    /* text-align: center; */
    padding: 0 3rem;
    background-color: ${({color})=>color?"white":"black"};
`