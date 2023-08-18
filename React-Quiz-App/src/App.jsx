import React from 'react'
import Cover from './components/Cover.jsx'
import Question from "./components/Question.jsx"
import { nanoid } from "nanoid"

import {data} from "./data.js"

//API URL: https://opentdb.com/api.php
//query: ?amount=5&difficulty=easy&type=multiple

function App() {

  const [start, setStart] = React.useState(false)
  const [questions, setQuestions] = React.useState(data)
  const [formData, setFormData] = React.useState(["", "", "", "", ""])


// //  api call to initialize question state
//   React.useEffect(() => {
//     fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
//       .then(res => res.json())
//       .then(data => {
//         setQuestions(data.results)
//       })
//   },[])

  function startQuiz() {
    console.log("start quiz")
    setStart(true)
  }

  function handleChange(answer, index) {
      setFormData(prev => {
        let arr = [...prev]
        arr[index] = answer
        return arr
      })
    }

function shuffleAnswers(array) { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array
} 

const questionArr = questions.map((question, index) => {
  return (<Question
            key={nanoid()}
            questionNum={index}
            formData={formData} 
            question={question} 
            handleChange={handleChange}
          />)
})

function handleSubmit(event) {
  event.preventDefault()
  console.log(formData)
}

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