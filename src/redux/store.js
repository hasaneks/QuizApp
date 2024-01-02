import { configureStore } from '@reduxjs/toolkit'

//Reducers
import quizReducer from './features/quizSlice'

export const store = configureStore({
  reducer: {
    quiz: quizReducer
  }
  /* middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) */
})
