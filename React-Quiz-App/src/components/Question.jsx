import React from "react"

export default function Question({formData, question, handleChange, questionName, shuffle}) {



    const answers = [...question.incorrect_answers, question.correct_answer]
    
    return(
        <>
            <fieldset>
                {/* Question 1 */}
                <p className="question--text">{question.question}</p>

                {/* Choice 1 */}
                <input type="radio" id={answers[0]} value={answers[0]} name={questionName}
                    checked={formData[questionName] === answers[0]}
                    onChange={(event) => handleChange(event)}
                />
                <label htmlFor={answers[0]}>{answers[0]}</label>

                {/* Choice 2 */}
                <input type="radio" id={answers[1]} value={answers[1]} name={questionName}
                    checked={formData[questionName] === answers[1]}
                    onChange={(event) => handleChange(event)}
                />
                <label htmlFor={answers[1]}>{answers[1]}</label>

                {/* Choice 3 */}
                <input type="radio" id={answers[2]} value={answers[2]} name={questionName}
                    checked={formData[questionName] === answers[2]}
                    onChange={(event) => handleChange(event)}
                />
                <label htmlFor={answers[2]}>{answers[2]}</label>

                {/* Choice 4 */}
                <input type="radio" id={answers[3]} value={answers[3]} name={questionName}
                    checked={formData[questionName] === answers[3]}
                    onChange={(event) => handleChange(event)}
                />
                <label htmlFor={answers[3]}>{answers[3]}</label>
            </fieldset> 
        </>
    )
}