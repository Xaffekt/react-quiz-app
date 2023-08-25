import {useState, useEffect} from "react"
import { nanoid } from "nanoid"
import Question from "./Question"


export default function Quiz(props) {
    

    const questionElements = props.data.map((element, index) => {
        return (
            <Question
                key={nanoid()} 
                question={element.question}
                answers={[...element.incorrect_answers, element.correct_answer ]}
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