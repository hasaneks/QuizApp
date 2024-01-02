import React, { useState, useEffect, useRef } from 'react'
import { ScrollView, View, Text } from 'react-native'
import Question from '../Question'
import styles from './Quiz.style'
import { padding } from 'style'
import { BlurView } from '@react-native-community/blur'
import Button from '../common/Button'
import ProgressBar from '../ProgressBar'
import { Brush, ZoomIn, ZoomOut } from 'assets/svg'
import IconButton from '../common/IconButton'
import { typography } from 'style'
import Header from '../Header'
import { formatTime } from 'helpers/utils'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import {
  nextQuestion,
  previousQuestion,
  onSelectAnswer
} from 'features/quizSlice'
import { useActionSheet } from '@expo/react-native-action-sheet'
import ResultBottomSheet from './components/ResultBottomSheet'
import AnswerKeyBottomSheet from './components/AnswerKeyBottomSheet'
import * as Icon from 'assets/svg'
export default function Quiz() {
  const insets = useSafeAreaInsets()
  const { showActionSheetWithOptions } = useActionSheet()
  const answerKeyRef = useRef()
  const resultRef = useRef()
  const { questions, answerList, subject, currentQuestionIndex } = useSelector(
    (state) => state.quiz
  )

  const [fontSize, setFontSize] = useState(typography.NORMAL)
  const [durationInSeconds, setDurationInSeconds] = useState(0)
  const dispatch = useDispatch()

  const onPressActionSheet = () => {
    const options = ['Cevap Anahtarı', 'Testi Bitir', 'Vazgeç']
    const destructiveButtonIndex = 1
    const cancelButtonIndex = 2

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        tintColor: '#fff',
        userInterfaceStyle: 'dark',
        showSeparators: true,
        destructiveColor: '#F97277'
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            answerKeyRef.current.snapToIndex(0)
            break

          case 1:
            methods.finishQuiz()
            break
        }
      }
    )
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setDurationInSeconds((prevDuration) => prevDuration + 1)
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [])

  const methods = {
    checkNextQuestion() {
      if (currentQuestionIndex + 1 === questions.length) {
        methods.finishQuiz()
        return
      }

      dispatch(nextQuestion())
    },
    finishQuiz() {
      resultRef.current.snapToIndex(0)
    }
  }

  return (
    <>
      <View style={styles.header(insets.top)}>
        <Header
          title={formatTime(durationInSeconds) + ' sn'}
          onPressRightButton={onPressActionSheet}
        />
        <ProgressBar
          title={subject}
          size={questions.length}
          progress={currentQuestionIndex + 1}
        />
      </View>

      <ScrollView style={{ flex: 1 }} contentInset={{ bottom: 100 }}>
        <View style={{ paddingHorizontal: padding.SMALL }}>
          <View style={styles.questionHeader}>
            <View style={styles.currentQuestion}>
              <Text style={{ color: '#97BDE0' }}>
                Soru: {currentQuestionIndex + 1}
              </Text>
            </View>
            <View style={styles.actionButtons}>
              <IconButton Icon={Brush} buttonStyle={{ marginRight: 5 }} />
              <IconButton
                Icon={ZoomIn}
                buttonStyle={{ marginRight: 5 }}
                onPress={() => setFontSize((prevState) => prevState + 2)}
              />
              <IconButton
                Icon={ZoomOut}
                onPress={() => setFontSize((prevState) => prevState - 2)}
              />
            </View>
          </View>

          <Question
            data={questions[currentQuestionIndex]}
            answerList={answerList}
            userAnswer={answerList?.find(
              (answer) => answer.id === questions[currentQuestionIndex].id
            )}
            fontSize={fontSize}
            onSelect={({ id, answer }) =>
              dispatch(onSelectAnswer({ id, answer }))
            }
          />
        </View>
      </ScrollView>

      <BlurView
        style={styles.footer(insets.bottom)}
        blurType="dark"
        blurAmount={-20}
        reducedTransparencyFallbackColor="white"
      >
        <Button
          onPress={() => dispatch(previousQuestion())}
          title={'Önceki Soru'}
          leftIcon={<Icon.ChevronLeft height={16} width={16} />}
          buttonStyle={styles.previousButton}
        />
        <Button
          onPress={() => methods.checkNextQuestion()}
          title={
            currentQuestionIndex + 1 === questions.length
              ? 'Testi Bitir'
              : 'Sonraki Soru'
          }
          buttonStyle={styles.nextButton}
        />
      </BlurView>

      <AnswerKeyBottomSheet subject={'Temel Kavramlar'} ref={answerKeyRef} />
      <ResultBottomSheet ref={resultRef} />
    </>
  )
}
