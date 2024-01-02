import { ScrollView, Text, View } from 'react-native'
import styles from './Quiz.style'
import React, { useRef, useState } from 'react'
import { BlurView } from '@react-native-community/blur'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useActionSheet } from '@expo/react-native-action-sheet'
import { useDispatch, useSelector } from 'react-redux'
import { typography, padding } from 'style'
import {
  AnswerKeyBottomSheet,
  ResultBottomSheet,
  Button,
  Question,
  ProgressBar,
  IconButton,
  Header
} from 'components'
import { Brush, ZoomIn, ZoomOut, ChevronLeft } from 'assets/svg'
import {
  nextQuestion,
  previousQuestion,
  onSelectAnswer
} from 'features/quizSlice'
export default function QuizPage() {
  const insets = useSafeAreaInsets()
  const { showActionSheetWithOptions } = useActionSheet()
  const answerKeyRef = useRef()
  const resultRef = useRef()
  const { questions, answerList, subject, currentQuestionIndex } = useSelector(
    (state) => state.quiz
  )

  const [fontSize, setFontSize] = useState(typography.NORMAL)
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
    <View style={styles.container}>
      <View style={styles.header(insets.top)}>
        <Header showTimer={true} onPressRightButton={onPressActionSheet} />
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
          leftIcon={<ChevronLeft height={16} width={16} />}
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
    </View>
  )
}
