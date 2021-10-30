import React,{useRef,useContext,useState} from 'react';
import styled from 'styled-components';
import spiderman from "../images/spiderman.png";
import { FirebaseContext } from "../backend/FirebaseContexte";
import { Link,useHistory } from 'react-router-dom';






export default function Login() 
{
    const firebase = useContext(FirebaseContext);
    console.log(firebase);
    const{signupUser,errors,errorMessage}=firebase
    console.log(errors);
    const data=
    {
        email:'',
        password:'',
    }
    const [user, setUser] = useState(data);
   
    const{email,password}=user;

    const refUser= useRef(null);
    console.log(user);

    const verifyInput=( email!=='' && password!=='')?<Button color="true" type='submit'>Inscription</Button>:<Button  disabled={true}>Inscription</Button>
   


    const handleChange=(e)=>
    {
        
        e.preventDefault();
        setUser({...user,[e.target.id]:e.target.value});
        console.log(e.target.id);
    }
    // output error Message
    const message=(errors)&&<p>{errorMessage}</p>;
    // redirection
    let history = useHistory();
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <Image>
                        <img src={spiderman} alt="ironman" />
                    </Image>
                    <FormContainer>
                        {message}
                        <h3>connexion</h3>
                        <Form onSubmit=
                            {
                                 (e)=> 
                                {
                                    e.preventDefault(); 
                                    signupUser(email,password).then(user=>{
                                        setUser({...data});
                                        // redirection
                                        message&&history.push("/welcome");  
                                    });    
                                }
                            }>
                            
                            <input onChange={handleChange} type='mail'  placeholder="Email" ref={refUser}  id='email' value={email} />
                            <input onChange={handleChange} type='password' placeholder="password" ref={refUser} id='password' value={password} />
                            {verifyInput}
                        </Form>
                        <div className='login'> <Link to="/login">Nouveau sur Marvel Quiz ? S'inscrire maintenant</Link></div>
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

