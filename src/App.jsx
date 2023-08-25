import {useState, useEffect} from 'react'
import Quiz from "./components/Quiz.jsx"
import {data} from "./data.js"

//API URL: https://opentdb.com/api.php
//query: ?amount=${questionAmount}&difficulty=easy&type=multiple

export default function App() {

  const [start, setStart] = useState(false)
  const [newQuiz, setNewQuiz] = useState(0)
  const [triviaData, setTriviaData] = useState()
  
  const questionAmount = 5


//calls API each time newQuiz changes
  useEffect(() => {
    setTriviaData(data)
    console.log("data change")
  }, [newQuiz])

  function startNewQuiz() {
    setNewQuiz(prev => prev + 1)
  }


  return (
    <>
      <main>
        {
          !start ?
            <div>
              <h1>Quizzical</h1>
              <h2>A trivia game made by Xaffekt</h2>
              <button onClick={() => setStart(prev => !prev)} className="cta-btn">Start quiz</button>
            </div>
          :
            <Quiz data={triviaData} startNewQuiz={startNewQuiz}/>
        }
      </main>
    </>
  )
}