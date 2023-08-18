import React from "react"

export default function Form({formData, questions, handleChange, handleSubmit}) {

    function handleSubmit() {
        console.log("form submitted")
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    {/* Question 1 */}
                    <p className="question--text">Question 1</p>
                    {/* ID, value will be dynamic to api data, checked === value */}
                    <input type="radio" id="Q1" value="1" name="firstAns" 
                        checked={formData.firstAns === "1"}
                        onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="Q1">Answer1</label><br />

                    <input type="radio" id="Q2" value="2"  name="firstAns"
                        checked={formData.firstAns === "2"}
                        onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="Q2">Answer2</label><br />

                    <input type="radio" id="Q3" value="3"  name="firstAns"
                        checked={formData.firstAns === "3"}
                        onChange={(event) => handleChange(event)}                    
                    />
                    <label htmlFor="Q3">Answer3</label><br />

                    <input type="radio" id="Q4" value="4"  name="firstAns"
                        checked={formData.firstAns === "4"}
                        onChange={(event) => handleChange(event)}                    
                    />
                    <label htmlFor="Q4">Answer4</label><br />

                    <input type="radio" id="Q5" value="5"  name="firstAns"
                        checked={formData.firstAns === "5"}
                        onChange={(event) => handleChange(event)}                    
                    />
                    <label htmlFor="Q5">Answer5</label><br />
                </fieldset> 

                <button className="main--btn">Check answers</button>
            </form>
        </div>
    )
}