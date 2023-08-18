import React from "react"

export default function Question({formData, question, handleChange, questionNum}) {


    const answers = [...question.incorrect_answers, question.correct_answer]
    
    return(
        <>
            <fieldset>
                {/* Question 1 */}
                <p className="question--text">{question.question}</p>

                {/* Choice 1 */}
                <input type="radio" id={answers[0]} value={answers[0]} name={answers[1]}
                    checked={formData[questionNum] === answers[0]}
                    onChange={() => handleChange(answers[0], questionNum)}
                />
                <label htmlFor={answers[0]}>{answers[0]}</label>

                {/* Choice 2 */}
                <input type="radio" id={answers[1]} value={answers[1]} name={answers[1]}
                    checked={formData[questionNum] === answers[1]}
                    onChange={() => handleChange(answers[1], questionNum)}
                />
                <label htmlFor={answers[1]}>{answers[1]}</label>

                {/* Choice 3 */}
                <input type="radio" id={answers[2]} value={answers[2]} name={answers[2]}
                    checked={formData[questionNum] === answers[2]}
                    onChange={() => handleChange(answers[2], questionNum)}
                />
                <label htmlFor={answers[2]}>{answers[2]}</label>

                {/* Choice 4 */}
                <input type="radio" id={answers[3]} value={answers[3]} name={answers[3]}
                    checked={formData[questionNum] === answers[3]}
                    onChange={() => handleChange(answers[3], questionNum)}
                />
                <label htmlFor={answers[3]}>{answers[3]}</label>
            </fieldset> 
        </>
    )
}