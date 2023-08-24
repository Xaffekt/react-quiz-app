import React from "react"

export default function Cover({handleStart}) {
    return (
        <div>
            <h1>Quizzical</h1>
            <h2>A trivia game made by Xaffekt</h2>
            <button onClick={handleStart} className="main-btn">Start quiz</button>
        </div>
    )
}