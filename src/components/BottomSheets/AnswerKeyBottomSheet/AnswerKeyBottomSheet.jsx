import React, { useCallback } from 'react'
import { forwardRef } from 'react'
import { Text, View } from 'react-native'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView
} from '@gorhom/bottom-sheet'
import { useSelector } from 'react-redux'
import styles from './AnswerKeyBottomSheet.style'
import * as Icon from 'assets/svg'
import { color } from 'style'

const AnswerKeyBottomSheet = forwardRef((props, ref) => {
  const { questions, answerList } = useSelector((state) => state.quiz)
  const { subject } = props

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.6}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  )

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={['90%']}
      handleIndicatorStyle={{ backgroundColor: '#fff' }}
      handleStyle={styles.handle}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Icon.Alphabet height={30} width={30} />
        </View>
        <View style={styles.headerInfo}>
          {subject && <Text style={styles.title}>{subject}</Text>}
          <Text style={styles.subTitle}>{questions.length} Soru</Text>
        </View>
      </View>
      <BottomSheetScrollView
        style={styles.container}
        contentInset={{ bottom: 50 }}
      >
        <>
          {questions?.map((question, index) => {
            const userAnswer = answerList.find(
              (answer) => answer.id === question.id
            )
            return (
              <Options
                key={question.id}
                index={index}
                question={question}
                userAnswer={userAnswer}
              />
            )
          })}
        </>
      </BottomSheetScrollView>
    </BottomSheet>
  )
})

const Options = ({ index, question, userAnswer }) => {
  return (
    <View style={styles.optionsContainer}>
      <Text style={{ color: color.TEXT_PRIMARY }}>{index + 1}. Soru</Text>
      <View style={styles.optionList}>
        {question?.options?.map((option) => {
          const isSelected = userAnswer?.answerId === option.id
          return (
            <View key={option.id} style={styles.option(isSelected)}>
              <Text style={{ color: color.TEXT_PRIMARY }}>{option.key}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default AnswerKeyBottomSheet
