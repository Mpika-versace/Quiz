import React from 'react';
import styled from 'styled-components';
import batman from '../images/batman.png';

const Section=styled.section`
    background-color:${({theme})=>theme.white};
    height:500px;
    text-align:center;
    line-height:250px;
    h2
    {

        text-align:center
    }
`;  
export default function Errorpage() 
{
    return (
        <Section>
            <div>
                <h2> Opps This page don't exist</h2>
                <img src={batman}  alt='batman'/>
            </div>
            
        </Section>
    )
}
