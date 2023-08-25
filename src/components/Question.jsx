import {useState, useEffect} from "react";
import { shuffleArray } from "../../utils";
import he from "he"

export default function Question({ questionNumber, question, answers, handleSelect }) {
    const shuffledAnswers = shuffleArray(answers)
    return (
        <div className="question-container">
            <h2>{he.decode(question)}</h2>
            <div className="answer-container">
                <div onClick={() => handleSelect(shuffledAnswers[0],  questionNumber)} className="answer ">{shuffledAnswers[0]}</div>
                <div onClick={() => handleSelect(shuffledAnswers[1],  questionNumber)} className="answer">{shuffledAnswers[1]}</div>
                <div onClick={() => handleSelect(shuffledAnswers[2],  questionNumber)} className="answer">{shuffledAnswers[2]}</div>
                <div onClick={() => handleSelect(shuffledAnswers[3],  questionNumber)} className="answer">{shuffledAnswers[3]}</div>
            </div>
        </div>
    )
}