import { View } from 'react-native'
import { Quiz } from 'components'
import styles from './Quiz.style'
import React from 'react'

export default function QuizPage() {
  return (
    <View style={styles.container}>
      <Quiz />
    </View>
  )
}
