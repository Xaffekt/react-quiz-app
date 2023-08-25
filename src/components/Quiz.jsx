import {useState, useEffect, useRef} from "react"
import { nanoid } from "nanoid"
import Question from "./Question"
import { generateCorrectAnswers } from "../../utils"
import he from "he"

export default function Quiz({data, startNewQuiz}) {
    const [correctAnswers, setCorrectAnswers] = useState(generateCorrectAnswers(data))
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(data.length))
    console.log(correctAnswers)


    // useEffect(() => {
    //     setSelectedAnswers(new Array(data.length))
    //     setCorrectAnswers(generateCorrectAnswers(data))
    // }, [data] )

    function handleSelect(event) {
        const {name, value} = event.target
        setSelectedAnswers(prev => {
            let array = prev
            array[name] = value
            return array
        })
        console.log(selectedAnswers)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("sumbit")
        console.log(`user: ${selectedAnswers}`)
        console.log(`correct: ${correctAnswers}`)
    }
    
    //Creates <Question /> array
    const questionElements = data.map((element, index) => {
        
        //decodes and groups answers into array
        const formatedAnswers = [he.decode(element.correct_answer)]
        element.incorrect_answers.forEach((element) => {formatedAnswers.push(he.decode(element))})

        return (
            <Question
                key={nanoid()}
                questionNumber={index}
                handleSelect={handleSelect}
                question={he.decode(element.question)}
                answers={formatedAnswers}
                correctAnswers={correctAnswers}
            />
        )
    })

    return(
        <div className="quiz-container">
            <form onSubmit={e => {handleSubmit(e)}}>
                {questionElements}
                <button className="cta-btn">check answers</button>
            </form>
        </div>
    )
}