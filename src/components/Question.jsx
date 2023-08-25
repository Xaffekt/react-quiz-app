import {useState, useEffect} from "react";
import { shuffleArray } from "../../utils";
import he from "he"
import {nanoid} from "nanoid"

//use useRef to target the ref belonging to the id/key of each div
export default function Question({ questionNumber, question, answers, handleSelect }) {
    const shuffledAnswers = shuffleArray(answers)

    //function to prevent using inline functions with answer divs
    // const handleIt = (answer) => {
    //     return () => handleSelect(answer, questionNumber)
    // }

    //generates array of divs based off shuffledAnswers
    const answerElements = shuffledAnswers.map((element,index) => {
        return (
            <label key={nanoid()}>
                {element}
                <input
                    type="radio"
                    name={questionNumber}
                    value={element}
                    onChange={handleSelect}
                />
            </label>


            // <div key={nanoid()} onClick={handleIt(e)} className="answer ">{element}</div>
        )
    })

    return (
        <div className="question-container">
            <h2>{he.decode(question)}</h2>
            <div className="answer-container">
                
                {answerElements}
             
            </div>
        </div>
    )
}