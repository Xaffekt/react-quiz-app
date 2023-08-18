import React from "react"

export default function Question(props) {
    const { question, handleChange, questionNum, choices, answer} = props
    return(
        <>
            <fieldset>
                {/* Question 1 */}
                <p className="question--text">{question}</p>

                {/* Choice 1 */}
                <input type="radio" id={choices[0]} value={choices[0]} name={choices[0]}
                    checked={answer === choices[0]}
                    onChange={() => handleChange(choices[0], questionNum)}
                />
                <label htmlFor={choices[0]}>{choices[0]}</label>

                {/* Choice 2 */}
                <input type="radio" id={choices[1]} value={choices[1]} name={choices[1]}
                    checked={answer === choices[1]}
                    onChange={() => handleChange(choices[1], questionNum)}
                />
                <label htmlFor={choices[1]}>{choices[1]}</label>

                {/* Choice 3 */}
                <input type="radio" id={choices[2]} value={choices[2]} name={choices[2]}
                    checked={answer === choices[2]}
                    onChange={() => handleChange(choices[2], questionNum)}
                />
                <label htmlFor={choices[2]}>{choices[2]}</label>

                {/* Choice 4 */}
                <input type="radio" id={choices[3]} value={choices[3]} name={choices[3]}
                    checked={answer === choices[3]}
                    onChange={() => handleChange(choices[3], questionNum)}
                />
                <label htmlFor={choices[3]}>{choices[3]}</label>
            </fieldset> 
        </>
    )
}