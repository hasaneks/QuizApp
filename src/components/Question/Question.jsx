import { View, TouchableOpacity } from 'react-native'
import Markdown from '../Markdown'
import { color } from 'style'
import styles from './Question.style'
import * as Icon from 'assets/svg'
import Option from '../Option'

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
          return (
            <Option
              key={answer.id}
              answer={answer}
              userAnswer={userAnswer}
              fontSize={fontSize}
              onPress={() => changeAnswer({ id, answer })}
            />
          )
        })}
      </View>
    </View>
  )
}
