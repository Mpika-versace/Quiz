import React, { Component } from 'react';
import styled from 'styled-components';
import Levels from './quizComponent/levels/Levels';
import Question from './quizComponent/question/Question';
import ProgressBars from './quizComponent/SetBarProgress/ProgressBars';
import {QuizMarvel} from './dataQuizMarvel/QuizMarvel'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class Quiz extends Component 
{
    state=
    {
        count:0,
        quizLevel:0,
        levelName:["debutant","confirme","expert"],
        storageQuestion:[],
        question:null,
        options:[],
        maxQuestion:10,
        selectQuestion:true,
        answerUser:null,
        goodAnswers:0,
        showWelecomeMessage:false

    }

    // recuperer les données du tableau

    storedDataref=React.createRef();

    

    // Welcome Message
    showWelcomeMsg=(pseudo)=>
    {
        if (!this.state.showWelecomeMessage) 
            {
                this.setState({showWelecomeMessage:true})
                toast.warn(`Bienvenu ${pseudo}`)
            }
    }

    notify = () => toast.success("Bravo !");
    badResponse = () => toast.error("Rater !");

    handleCount=()=>
    {
        console.log(this.state.goodAnswers)
        const{count,maxQuestion,answerUser,goodAnswers}=this.state
        if (count===maxQuestion-1) 
        {
            console.log("Game over")
            //End
            // this.setState({selectQuestion:true});
        } else 
        {
            
            // this.setState(prevState=>({count:prevState.count+1}))
            this.setState({count:this.state.count+1});
            this.setState({selectQuestion:true}); 
        }
        
            if(this.storedDataref.current[count].answer===answerUser)
            {
                this.setState(prevState=>({goodAnswers:prevState.goodAnswers+1}));
                this.notify();
            }
            else{this.badResponse();}
        // good score

      
        // const{count,sizeMaxQuestion,quizLevel}=this.state;
       
    };

    getQuestionQuiz=(level)=>
    {
        
        const{maxQuestion}=this.state;
     
        const fetchedArrayQuiz=QuizMarvel[0].quizz[level];
        this.storedDataref.current=fetchedArrayQuiz;
        
        if (fetchedArrayQuiz.length>=maxQuestion) 
        {
            // get out the answers
            const newArrayQuestion=fetchedArrayQuiz.map(({answer,...keepRest})=>keepRest);
            this.setState({storageQuestion:newArrayQuestion})
        }
        
    }

    componentDidMount() 
    {
        const{levelName,quizLevel}=this.state;
        this.getQuestionQuiz(levelName[quizLevel]);
        
       
        
        
    }
    componentDidUpdate(prevProps, prevState) 
    {
        const{storageQuestion,count}=this.state
            if (storageQuestion!==prevState.storageQuestion || count!==prevState.count) 
            {
                
                console.log(storageQuestion[count]);
                this.setState(
                {
                
                    question:storageQuestion[count].question,
                    options:storageQuestion[count].options
                })
            }

            
                if (this.props.id.pseudo) 
                {
                    this.showWelcomeMsg(this.props.id.pseudo)
                }
        
    }


    validedQuestion=(selectedAnswer)=>
    {
    
        this.setState(
            {
                answerUser:selectedAnswer,
                selectQuestion:false
            })
         
    }
    
    
    
    render() 
    {
        
      
        const{count,options}=this.state
        const{pseudo}=this.props.id;
        return (
            <Container>
                <Levels goodAnswers={this.state.goodAnswers} />
                <ToastContainer icon={false}/>
                <ProgressBars count={count} />
                <Question selectQuestion={this.state.selectQuestion} answerUser={this.state.answerUser} validedQuestion={this.validedQuestion} count={count} handleCount={this.handleCount} question={this.state.question} options={options} />
                Pseudo : {pseudo}
               
            </Container>
        )
    }
}


const Container=styled.div`
padding: 2rem 0;
.levels
{
    display: flex;
    justify-content: space-between;
    background-color:#FCF6F8 ;
    padding: 1rem;
    font-weight: 500;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    &-score
    {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        background-color: #00ff00;
        text-align: center;
    }
}

`;
