import React from 'react'
import Cover from './components/Cover.jsx'
import Form from "./components/Form.jsx"

//API URL: https://opentdb.com/api.php
//query: ?amount=5&difficulty=easy&type=multiple

function App() {

  const [start, setStart] = React.useState(false)
  const [questions, setQuestions] = React.useState([])
  const [formData, setFormData] = React.useState(
    {
      firstAns: "",
      secondAns: "",
      thirdAns: "",
      fourthAns: "",
      fithAns: ""
    }
  )
  console.log(questions)


  //api call to initialize question state
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results)
      })
  },[])

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

console.log(formData)

  return (
    <>
      <main>
        {!start && <Cover handleStart={startQuiz}/>}
        {start && <Form formData={formData} questions={questions} handleChange={handleChange}/>}
      </main>
    </>
  )
}

export default App