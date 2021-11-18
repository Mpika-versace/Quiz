import React,{useRef,useState} from 'react';
import styled from 'styled-components';

const Options=({option,validedQuestion,answerUser})=>
{
    
    const response = useRef("");
   
    // console.log(option);
    // className={(answerUser===option)&&"parag"}
    return <Paragraph $color={(answerUser===option)&&true}  ref={response} onClick={()=>
        validedQuestion(option)
       
    }>{option}</Paragraph>
};

export default function Question({count,handleCount,selectQuestion,question,options,validedQuestion,answerUser}) 
{
    
 
    // console.log(handleCount)
    // console.log(options)
    return (
        <Container>
            <h2>{question}</h2>
            {options.map((option,index)=> <Options key={index} option={option} validedQuestion={validedQuestion} answerUser={answerUser} />)}
            
            

            <div className="btnQuestion">
                <Button $color={!selectQuestion} disabled={selectQuestion} onClick={()=> { handleCount()}}>Suivant</Button>
            </div>
            
        </Container>
    )
}
const Container=styled.div`
    .btnQuestion
    {
        text-align: center;
       
    }
    
`;
const Button=styled.button`
            display: inline-block;
            padding: .2rem 2rem;
            font-size:1.1rem;
            background-color:${({$color})=>$color?"#f21":"#DDD6D9"} ;
            border: none;
            color: #fff;
            cursor: pointer;
            box-shadow:4px 4px 16px rgba(0,0,0,.5);
            transition:all .5s ;
            &:active
            {
                box-shadow: none;
            }
`;
const Paragraph=styled.p`
        background-color: ${({$color})=>$color?"red":"#DDD6D9"} ;
        text-transform: ${({$color})=>$color&&"uppercase"} ;
        color:${({$color})=>$color&&"white"} ;
        padding: .4rem;
        border-radius: .25rem;
        transition:all .5s ease;
        /* &.parag
        {
            
        } */
        
        &:hover
        {
            background-color: #f00;
            cursor: pointer;
            color: #f1f2f2;
            font-weight: bold;
        }
`;