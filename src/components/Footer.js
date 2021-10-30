import React from 'react';
import styled from 'styled-components';

const Footercss=styled.footer`
    background-color:black;
    display: flex;
    margin-top:1rem;
    justify-content: center;
`;
const Container=styled.div`
    padding: 20px 0;
    padding: 20px 0;
    flex: 0 1 80%;

    p {
        color: ${({theme})=>theme.white};
        line-height: 19px;
        margin: 10px 0;
        padding: 0;
        font-size: 12px;
        font-weight: normal;
      }
`;

export default function Footer() 
{
    return (
        <Footercss>
            <Container>
                <p>
                    Projet realiser par
                    <span> Versace </span>
                    
                </p>
                <p>
                    Les Icones Wolverine,iron-man,Spider-man
                    Batman sont prise sur IconFinder.com

                </p>
            </Container>   
            
        </Footercss>
    )
}
