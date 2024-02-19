import React from 'react'
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTION from '../questions'


 const Summary = ({userAnswer}) => {
    let  skippedAnswer = userAnswer.filter(answer => answer===null)
    let  correctAnswer = userAnswer.filter((answer,index) => answer===QUESTION[index].answers[0])
    let skippedShare =Math.round( (skippedAnswer.length / userAnswer.length) * 100 )
    let correctShare = Math.round( (correctAnswer.length / userAnswer.length) * 100 )
    let wrongShare = 100-skippedShare-correctShare

  return (
    <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <p>
                <span className='number'>{skippedShare}%</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>{correctShare}%</span>
                <span className='text'>Answered Correctly</span>
            </p>
            <p>
                <span className='number'>{wrongShare}%</span>
                <span className='text'>Answered Incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswer.map((answer,index) =>{
                let cssclass='user-answer'
                if(answer === null){
                    cssclass += ' skipped'
                }
                else if(answer === QUESTION[index].answers[0]){
                    cssclass += ' correct'
                }
                else{
                    cssclass += ' wrong'
                }
                return(<li key={index}>
                    <h3>{index+1}</h3>
                    <p className='question'>{QUESTION[index].text}</p>
                    <p className={cssclass}>{answer ?? 'skipped'}</p>
                </li>   )
                
            })}
            
        </ol>
      </div>

  )
}
export default Summary
