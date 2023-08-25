import {useState, useEffect, useRef} from "react"
import { nanoid } from "nanoid"
import Question from "./Question"
import { generateCorrectAnswers } from "../../utils"
import he from "he"

export default function Quiz({data, startNewQuiz}) {
    const [correctAnswers, setCorrectAnswers] = useState(generateCorrectAnswers(data))
    const [shuffledAnswers, setShuffledAnswers] = useState([])
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(data.length))
        console.log(correctAnswers)

    useEffect(() => {

    }, [data] )

    function handleSelect(answer, index) {
        setSelectedAnswers(prev => {
            let array = prev
            array[index] = answer
            return array
        })
        console.log(selectedAnswers)
    }
    
    const questionElements = data.map((element, index) => {
        //decodes answers
        const formatedAnswers = [he.decode(element.correct_answer)]
        element.incorrect_answers.forEach((element) => {formatedAnswers.push(he.decode(element))})

        return (
            <Question
                key={nanoid()}
                questionNumber={index}
                handleSelect={handleSelect}
                question={element.question}
                answers={formatedAnswers}
            />
        )
    })

    return(
        <div className="quiz-container">
            {questionElements}
            <button className="cta-btn">check answers</button>
        </div>
    )
}