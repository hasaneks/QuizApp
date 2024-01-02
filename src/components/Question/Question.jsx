import { View, TouchableOpacity } from 'react-native'
import Markdown from '../Markdown'
import { color } from 'style'
import styles from './Question.style'
import * as Icon from 'assets/svg'

export default function Question({ data, userAnswer, onSelect, fontSize }) {
  const { id, text, options } = data

  const changeAnswer = ({ id, answer }) => {
    onSelect({ id, answer })
  }

  return (
    <View>
      <Markdown
        style={{
          text: {
            fontSize: fontSize,
            lineHeight: fontSize + 10,
            color: color.TEXT_PRIMARY
          }
        }}
      >
        {text}
      </Markdown>
      <View style={styles.answerList}>
        {options?.map((answer) => {
          const fullAnswer = answer.key + ')' + ' ' + answer.text
          const isSelected = userAnswer?.answerId === answer.id
          return (
            <TouchableOpacity
              key={answer.id}
              style={styles.answer(isSelected)}
              onPress={() => changeAnswer({ id, answer })}
            >
              <View style={styles.radioContainer}>
                {isSelected ? (
                  <Icon.SelectedCircle height={24} width={24} />
                ) : (
                  <Icon.Circle height={24} width={24} />
                )}
              </View>
              <Markdown>{fullAnswer}</Markdown>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}
