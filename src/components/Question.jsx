import { Fragment } from "react";
import { shuffleArray } from "../../utils";
import { nanoid } from "nanoid"

//use useRef to target the ref belonging to the id/key of each div
export default function Question({ questionNumber, question, answers, handleSelect }) {
    const shuffledAnswers = shuffleArray(answers)

    //generates array of divs based off shuffledAnswers
    const answerElements = shuffledAnswers.map((element, index) => {
        const id = nanoid()
        return (
            <Fragment key={nanoid()}>
                <input
                    type="radio"
                    name={questionNumber}
                    value={element}
                    onChange={handleSelect}
                    id={id}
                />

                <label htmlFor={id}>
                    {element}
                </label>
            </Fragment>
        )
    })

    return (
        <div className="question-container" >
            <h2>{question}</h2>
            <div className="answer-container" >
                {answerElements}
            </div>
        </div>
    )
}