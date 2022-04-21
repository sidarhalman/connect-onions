import React, {useState, useEffect } from 'react';
import questionsData from '../data/questionsData';
import Question from './Question';
import './questions.css'
const Questions = () => {

const [questions, setQuestions] = useState(questionsData);


function thankingMessage() {
    alert('Your message has been sent!')
}


return ( <div className='App'>
    
<h1>Most asked Questions</h1>

<section className='questions'>
{
    questions.map((question) => {
        return(
            <Question key={question.id} {...question}></Question>            
        )
    })
}
</section>

<section>
    <form onSubmit={thankingMessage}>
    <input type='email' placeholder='your email'></input>
    <br />
    <textarea type='text' placeholder='your message' style={{ width: 250 ,height: 250, backgroundColor: 'greenyellow'}}></textarea>
    <br />
    <button>Send your Message</button>     
    </form>
</section>



    </div>
)}

export default Questions;