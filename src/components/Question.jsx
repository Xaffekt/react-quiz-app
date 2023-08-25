import React from "react";
import { shuffleArray } from "../../utils";

export default function Question({ question, answers }) {
    const shuffledAnswers = shuffleArray(answers)
    console.log(answers)
    return (
        <div className="question-container">
            <h2>{question}</h2>
            <div className="answer-container">
                <span className="answer">{shuffledAnswers[0]}</span>
                <span className="answer">{shuffledAnswers[1]}</span>
                <span className="answer">{shuffledAnswers[2]}</span>
                <span className="answer">{shuffledAnswers[3]}</span>
            </div>
        </div>
    )
}