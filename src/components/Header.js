import React from 'react';
import styled from 'styled-components';

const Head=styled.header`
        display: flex;
        justify-content: center;
`;
const Container=styled.div`
        padding: 20px 0;
        flex-basis: 80%;
        h1
        {
            font-size: clamp(3rem,4vw,5rem);
            font-weight: bold;
        }
`;

export default function Header() 
{
    return (
        <Head>
            <Container>
                <h1><a href="/">Marvel Quiz</a></h1>
            </Container>
            
        </Head>
    )
}
