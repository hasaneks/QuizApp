const quizAnalysis = ({ answerList, questions }) => {
  let correctAnswers = 0
  let wrongAnswers = 0
  let blankAnswers = 0
  let netPoint = 0

  questions.map((question) => {
    const userAnswer = answerList?.find((answer) => answer.id === question.id)

    if (!userAnswer) {
      blankAnswers += 1
      return
    }

    if (userAnswer.answerId === question.correctOptionId) {
      correctAnswers += 1
      return
    }

    if (userAnswer.answerId !== question.correctOptionId) {
      wrongAnswers += 1
    }
  })

  netPoint = correctAnswers - wrongAnswers * 0.25

  return { correctAnswers, wrongAnswers, blankAnswers, netPoint }
}

export default quizAnalysis
