import React from 'react'
import Cover from './components/Cover.jsx'
import Question from "./components/Question.jsx"
import { nanoid } from "nanoid"

import {data} from "./data.js"

//API URL: https://opentdb.com/api.php
//query: ?amount=5&difficulty=easy&type=multiple

function App() {

  const [start, setStart] = React.useState(false)
  const [triviaData, setTriviaData] = React.useState(data)
  const [answers ,setAnswers] = React.useState(new Array(triviaData.length))

//  api call to initialize question state
  React.useEffect(() => {
    // fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
    //   .then(res => res.json())
    //   .then(data => {
    //     setQuestions(data.results)
    //   })

  },[])

  function startQuiz() {
    console.log("start quiz")
    setStart(true)
  }

  function handleChange(answer, index) {
    setAnswers(prev => {
      let arr = [...prev]
      arr[index] = answer
      return arr
    })
    console.log(answers)
  }

    function shuffleArray(array) { 
      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      }
      return array
    } 


  function handleSubmit(event) {
    event.preventDefault()
    console.log(answers)
  }

    const questionArr = triviaData.map((data, index) => {
      const choices = [...data.incorrect_answers, data.correct_answer]
  
      return (<Question
                key={nanoid()}
                questionNum={index} 
                question={data.question} 
                handleChange={handleChange}
                choices={shuffleArray(choices)}
                answer={answers[index]}
              />)
    })


  return (
    <>
      <main>
        {!start && <Cover handleStart={startQuiz}/>}
        { start &&
          <form onSubmit={event => handleSubmit(event)}>
            {questionArr}
            <button className="main-btn">Check answers</button>
          </form>
        }
      </main>
    </>
  )
}

export default App