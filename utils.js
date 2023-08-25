export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

//returns correct answers if answers is true
export function generateCorrectAnswers(array) {
  const answerArray = []
  array.map((element) => {
    answerArray.push(element.correct_answer) 
  })
  return answerArray
}

