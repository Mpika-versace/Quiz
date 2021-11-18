import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import wolverine from '../images/wolverine.png';
import xmen from '../images/xmen.png';
import griffesGauche from '../images/griffesGauche.png';
import griffesDroit from '../images/griffesDroit.png';
import { Link } from 'react-router-dom';


const Main=styled.main`
    text-align: center;
    background-repeat: no-repeat;
    background-position: center center;
    background-color:${({theme})=>theme.red} ;
    background-image: ${({images})=>images?`url(${wolverine}) ` :`url(${xmen})`};
    background-image: ${({clawLeft})=>clawLeft && `url(${wolverine}),url(${griffesGauche}) `};
    background-image: ${({clawRight})=>clawRight && `url(${wolverine}),url(${griffesDroit}) `};
    height: 500px;
    display:flex;
    // align-items:center;
    justify-content:space-between;
    

`;

 
// Button use 
const LeftBox=styled.div`
    display: flex;
    flex: 0 1 35%;
    align-items: center;
    justify-content: flex-end;
    border:1px solid white;
`;
const RightBox=styled(LeftBox)`
justify-content: flex-start;
`;
const Button=styled(Link)`
text-decoration:none;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid ${({theme})=>theme.white};
border-radius: 3px;
color:${({theme})=>theme.white};
background:none;
cursor:pointer;
font-size:19px;

&:hover
{
    color:${({theme})=>theme.red};
    background:${({theme})=>theme.white};
}
`;


export default function Landing() 
{
    
   
    const [image, setImage] = useState(false);
    const [clawLeft, setClawLeft] = useState(false);
    const [clawRight, setClawRight] = useState(false);


    useEffect(() => 
    {
        let x=setTimeout(() => 
        {
            setImage(true);
        }, 1000);
        
        return ()=>
        {
            clearTimeout(x)
        }
        
    }, [image]);

    /* Display and clear claw left*/ 
    const displayClawLeft=()=>
    {
        setClawLeft(true);
    };
    const clearClawLeft=()=>
    {
        setClawLeft(false);
    }

    /* Display and clear claw right*/ 
    const displayClawRight=()=>
    {
        setClawRight(true);
    };
    const clearClawRight=()=>
    {
        setClawRight(false);
    }

    // display Image wolverine without griffe after 4s 
    const displayBtn=image &&(
        <>
            <LeftBox onMouseOver={displayClawLeft} onMouseLeave={clearClawLeft}>
                <Button to="/signup">Inscription </Button>
            </LeftBox> 

            <RightBox onMouseOver={displayClawRight} onMouseLeave={clearClawRight}>
                <Button to="/login">Connexion </Button>
            </RightBox>
        </>
    );
   
    return (
        <Main images={image} clawLeft={clawLeft} clawRight={clawRight}>
           {displayBtn}
             
        </Main>
    )
}
