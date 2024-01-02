import { createSlice } from '@reduxjs/toolkit'
import questions from 'mockupData/question.json'

const initialState = {
  questions: questions,
  subject: 'Temel Kavramlar Seviye Belirleme Sınavı',
  answerList: [],
  currentQuestionIndex: 0
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    onSelectAnswer: (state, action) => {
      const { answer, id } = action.payload
      const { answerList } = state

      const answerIndex = answerList.findIndex((answer) => answer.id === id)
      const answerData = { id: id, answerId: answer.id, answerKey: answer.key }

      if (answerIndex !== -1) {
        answerList[answerIndex] = answerData
        return
      }

      answerList.push(answerData)
    },
    previousQuestion: (state, action) => {
      if (state.currentQuestionIndex - 1 < 0) {
        state.currentQuestionIndex = 0
        return
      }

      state.currentQuestionIndex -= 1
    },
    nextQuestion: (state, action) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        return
      }

      state.currentQuestionIndex += 1
    }
  }
})

export const { onSelectAnswer, nextQuestion, previousQuestion } =
  quizSlice.actions
export default quizSlice.reducer
