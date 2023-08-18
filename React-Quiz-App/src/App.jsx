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
  const [formData, setFormData] = React.useState(
    {
      firstAns: "",
      secondAns: "",
      thirdAns: "",
      fourthAns: "",
      fithAns: ""
    }
  )


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

  function handleChange(event) {
    console.log(event.target)
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
         return {
             ...prevFormData,
             [name]: type === "checkbox" ? checked : value
         }
     })
}

function shuffleAnswers(array) { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array
} 

// const questionArr = questions.map((question) => {
//   return (<Question
//             key={nanoid()}
//             formData={formData} 
//             question={question} 
//             handleChange={handleChange}
//             name={}
//           />)
// })

function handleSubmit(event) {
  event.preventDefault()
  console.log(event.target)
}

console.log(formData)

  return (
    <>
      <main>
        {!start && <Cover handleStart={startQuiz}/>}
        { start &&
          <form onSubmit={event => handleSubmit(event)}>
            <Question
              key={nanoid()}
              formData={formData}
              question={questions[0]}
              handleChange={handleChange}
              questionName="firstAns"
              shuffle={shuffleAnswers}
            />

            <Question
              key={nanoid()}
              formData={formData}
              question={questions[1]}
              handleChange={handleChange}
              questionName="secondAns"
              shuffle={shuffleAnswers}
            />

            <Question
              key={nanoid()}
              formData={formData}
              question={questions[2]}
              handleChange={handleChange}
              questionName="thirdAns"
              shuffle={shuffleAnswers}
            />

            <Question
              key={nanoid()}
              formData={formData}
              question={questions[3]}
              handleChange={handleChange}
              questionName="fourthAns"
              shuffle={shuffleAnswers}
            />

            <Question
              key={nanoid()}
              formData={formData}
              question={questions[4]}
              handleChange={handleChange}
              questionName="fithAns"
              shuffle={shuffleAnswers}
            />
            <button className="main--btn">Check answers</button>
          </form>
        }
      </main>
    </>
  )
}

export default App