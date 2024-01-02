export const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600)
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
  const seconds = timeInSeconds % 60

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}:${String(seconds).padStart(2, '0')}`
}

export const quizAnalysis = ({ answerList, questions }) => {
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
