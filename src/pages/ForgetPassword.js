import React,{useContext,useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import styled from 'styled-components';
import deadpool from "../images/deadpool.png";
import {FirebaseContext} from '../backend/FirebaseContexte';
import {useForm} from 'react-hook-form'








export default function ForgetPassword() 
{
   
    let history=useHistory();
    const{register,handleSubmit,formState:{isValidating,isDirty,isSubmitSuccessful,isValid,isSubmitting}}=useForm({mode:'onChange'});
    /*const{isValid}=useFormState;
    console.log(isSubmitting);
    console.log(isSubmitSuccessful)
    console.log(isDirty)
    console.log(isValidating)
    */
   const [emailUser, setIEmailUser] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   
   useEffect(() => {
       if(emailUser)
       {
         setTimeout(()=>{setIEmailUser(!emailUser)},3000)
       }
       return () => {
           clearTimeout(setTimeout(()=>{setIEmailUser(!emailUser)},3000))
       }
   }, [emailUser])
    
    const firebase = useContext(FirebaseContext);
    const{sendPasswordResetEmail,auth}=firebase;
    
    const onSubmit=({email})=>
    {
        console.log(email);
        sendPasswordResetEmail(auth,email)
        .then(()=>
        { setTimeout(() => 
            {
                history.push("/login")
            }, 5000); 
        })
        .catch(error=>
        {
            setIEmailUser(true);
            const errorCode=error.code;
            setErrorMessage(error.message)
        })  
    }
    // verifier si l'utilisateur existe
    const verifyEmail=(emailUser)&&<span>{errorMessage}</span>;
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <Image>
                        <img src={deadpool} alt="ironman" />
                    </Image>
                    <FormContainer>
                        {verifyEmail}
                        <h3>Mot de passe oublié</h3>

                            <Form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("email",{required:true,pattern:/^\S+@\S+[.a-z]{2,15}/i})}  type='mail'  placeholder="Email"  id='email' autoComplete="off" />
                            
                            {(isValid)?<Button color="true"  type="submit">Récupérer</Button>:<Button disabled>Récupérer</Button>}
                        </Form>
                        <div className='login'> <Link to="/signup">Nouveau sur Marvel Quiz ? S'inscrire maintenant</Link></div>
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
        span
        {
            display: inline-block;
            text-align: center;
            border: 1px solid;
            margin:1rem;
            padding: .5rem;
            width: 100%;
            font-size: 1.2rem;
            color:red
        }
`;
const Form=styled.form`
padding:0 1rem;
.alert
{
    display: inline-block;
    padding: .2rem;
    font-size: 1rem;
    text-transform: capitalize;
    color:#842029 ;
    background-color:#f8d7da ;
    border:1px solid #f8d7da;
    margin: .5rem 0;
}
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


