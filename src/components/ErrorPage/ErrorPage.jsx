import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import styles from './ErrorPage.style'
import Button from '../common/Button'

const ErrorPage = ({ message = 'Bir problem oluştu', onRetry }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.message_text}>{message}</Text>
      <Button
        title="Tekrar Dene"
        buttonStyle={{ width: '50%', justifyContent: 'center' }}
        onPress={onRetry}
      />
    </SafeAreaView>
  )
}

export default ErrorPage
