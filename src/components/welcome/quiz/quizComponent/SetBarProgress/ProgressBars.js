import React from 'react';
import styled from 'styled-components';


export default function ProgressBars({count}) 
{
    // console.log(count)
    return (
        <Container>
            <div className="btn">
                <ProgressPercent onClick={() => console.log("Question: 1/10")}>
                    Question: {count}/10
                </ProgressPercent>
                <ProgressPercent onClick={() => console.log("Question: 1/10")}>
                    progression: {(count)*10}%
                </ProgressPercent>
                
            </div>
            <div className="bars"><Bars count={count}></Bars></div>
            
        </Container>
    )
}

const Container=styled.div`
    padding: 2rem;
    .btn
    {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        
    }
`;
const ProgressPercent=styled.div`
    display: inline-block;
    width:9rem ;
    border: none;
    padding:.4rem .8rem;
    border-radius: .25rem;

`;
const Bars=styled.span`
position: relative;
    display: inline-block;
    border:1px solid red;
    width: 100%;
    height: 1rem;
    &::before
    {
        content: "";
        position: absolute;
        background-color: blue;
        height: 1rem;
        width: ${({count})=>(count)*10}%;
    }
    
`;
