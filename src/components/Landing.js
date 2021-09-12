import React,{useState} from 'react';
import styled from 'styled-components';
import wolverine from '../images/wolverine.png'
import griffesDroit from '../images/griffes-droit.png'
import griffesGauche from '../images/griffes-gauche.png'
const Main=styled.main`
    text-align: center;
    /* background-color: ${({theme})=>theme.red}; */
    background:${({theme})=>theme.red} url(${wolverine}) no-repeat 50% 50%;
    height: 500px;
`;
const Droite=styled.div`
    
    background: ${({showGriffe})=>!showGriffe && "url(${griffesGauche}) no-repeat 50% 50%"};
    height: 500px;
`;

const Gauche=styled.div`
    background:${({showGriffe})=>showGriffe&&`url(${griffesGauche}) no-repeat 50% 50%`} ;
    height: 500px;
`;

export default function Landing() 
{
    const [showGriffe, setShowGriffe] = useState(false)
    const handleGriffes=()=>
    {
        setShowGriffe(!showGriffe);
        console.log(showGriffe)
    }
    return (
        <Main onClick={handleGriffes}>
            <Droite showGriffe />
            <Gauche />
            {/* <img src={wolverine} alt="wolverine" /> */}
        </Main>
    )
}
