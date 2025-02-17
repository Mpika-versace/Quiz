import React,{useContext,useState} from 'react';
import styled from 'styled-components';
import ironman from "../images/ironman.png";
import { FirebaseContext } from "../backend/FirebaseContexte";
import { Link,useHistory } from 'react-router-dom';







export default function SignUp() 
{
  
    const firebase = useContext(FirebaseContext);
    const{signupUser,userEmail,userDB,setDoc}=firebase;
    // console.log(db,collection,addDoc)
    const data=
    {
        pseudo:'',
        email:'',
        password:'',
        comfirPassword:''
    }
    const [user, setUser] = useState(data);
    // Error Message inscription
    const [error, setErrors] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
   
    const{pseudo,email,password,comfirPassword}=user;

    const verifyInput=(pseudo!=='' && email!=='' && password!=='' && password===comfirPassword)?<Button color="true" type='submit'>Inscription</Button>:<Button  disabled={true}>Inscription</Button>
   


    const handleChange=(e)=>
    {
        
        // e.preventDefault();
        setUser({...user,[e.target.id]:e.target.value});
    }

    const handleSubmit=(e)=> 
    {
        e.preventDefault(); 
        // userStatus()
            signupUser(email,password)
            .then(user=>
                {
                   setDoc(userDB(user.user.uid),
                   {
                        pseudo,
                        email
                   }) 
                    history.push("/welcome");
                    // userDB({pseudo,email})
                    
                    // add the user data in the database firestore
                    /*try 
                    {
                        const docRef= addDoc(collection(db,"users"),
                        {
                            pseudo,
                            email
                        });
                        
                    } catch (error) {
                        console.error("Error adding document: ", error);
                    }
                    */
                })
            .catch ((error)=>
        {
            setErrors(true)
            setErrorMessage(error.message)
        })
            
    }

    // output error Message
    const message=(error)&&<p>{errorMessage}</p>;
    // redirection
    let history = useHistory();
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <Image>
                        <img src={ironman} alt="ironman" />
                    </Image>
                    <FormContainer>
                        {error&&<h2>your email:{userEmail}</h2>}
                        {message}
                        <h3>inscrption</h3>
                        <Form onSubmit={handleSubmit}>
                            <input onChange={handleChange} type='text'   placeholder="Pseudo"  id='pseudo' value={pseudo} />
                            <input onChange={handleChange} type='mail'  placeholder="Email"   id='email' value={email} required />
                            <input onChange={handleChange} type='password' placeholder="password"  id='password' value={password} />
                            <input onChange={handleChange} type='password' placeholder="confirm password"  id='comfirPassword' value={comfirPassword} />
                            {verifyInput}
                        </Form>
                        <div className='login'> <Link to="/login">Déja inscrit;Connectez-vous</Link></div>
                    </FormContainer>
                    
                </Flex>
            </Container> 
        </Wrapper>
    )
};

const Wrapper=styled.div``;
const Container=styled.div``;
const Flex=styled.div`
    display:flex;
    flex-direction:column;
    grid-gap:1.5rem;
    color:${({theme})=>theme.white};
    h3
    {
        margin:0 1rem;
        text-transform:upperCase;
        font-weight:bold;
        
    }

    @media (min-width:768px)
    {
        flex-direction:row;
        align-items:center;
    }
`;
const Image=styled.div`
        flex:1`;
const FormContainer=styled.div`
        flex:1;
        p
        {
            border:1px solid red;
            color:red;
            text-align:center;
            font-size:1.4rem;
        }
        .login
        {
            border-top:3px dashed black;
            margin-top:1rem;
            color:black;
            padding:1rem 0;
            a{
                color:white;
                font-size:1.4rem;
            }
        }
`;
const Form=styled.form`
padding:0 1rem;
input
{
    display:block;
    width:100%;
    color:${({theme})=>theme.white};
    background-color:transparent;
    outline:none;
    font-size:1.2rem;
    border:none;
    border-bottom:2px solid white; 
    margin:1rem 0;
    
}
`;
const Button=styled.button`
text-decoration:none;
font-size: 1em;
padding: 0.25em 1em;
border:none;
border-radius: 3px;
color:${({theme})=>theme.white};
background:${({theme,color})=>color&&theme.green};
cursor:pointer;
font-size:19px;
`;
