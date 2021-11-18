import React,{useRef,useState,useEffect,useContext} from 'react';
import styled from 'styled-components';
import {FirebaseContext} from '../../backend/FirebaseContexte'


export default function Logout() 
{
    const firebase = useContext(FirebaseContext)
    const{signOutUser}=firebase;
    const [checked, setChecked] = useState(false);
    
    useEffect(() => 
    {
        if(checked)
        {
            console.log("deconnexion");
            signOutUser()
        }
        
        // return () => {cleanup}
    
    },[checked])
    
    const refInput = useRef("");
    
    // console.log("je suis dans le render")
    return (
        <Container color={`${checked}`}>
                <input onChange={(e)=>{
                    // e.preventDefault();
                    console.dir(refInput.current.id)
                    setChecked(refInput.current.checked );
                    
                    
                }} ref={refInput} type="checkbox" id="toggle" checked={checked}/>
                <label htmlFor="toggle"></label>
                
        </Container>
    )
}

const Container=styled.div`
/* border: 1px solid; */
    width: 80%;
    height: 3rem;
    /* line-height: 3rem; */
    margin:0 auto;
    text-align: right;
    padding: 1rem;
    /* background-color: ${({color})=> (color==="false")?"white":"blue"}; */

    input[type="checkbox"]
    {

        /* visibility: hidden; */
        opacity: 0;
        display: inline-block;
        &:checked + label::before
        {
            transform: translateX(26px);
        }
        &:checked + label
        {
            background-color:#2096F3 ;
        }
    }

    label
    {
        display: inline-block;
        width: 60px;
        height: 34px;
        border: 2px solid;
        background-color: #ccc;
        position: relative;
        border-radius: 24px;
        cursor: pointer;
        &::before
        {
            content: "";
            position: absolute;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background-color: #fff;
            bottom: 4px;
            left: 4px;
            transition: all .5s;
        }
    }
    `;