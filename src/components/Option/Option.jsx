import { TouchableOpacity, View } from 'react-native'
import styles from './Option.style'
import * as Icon from 'assets/svg'
import Markdown from '../Markdown/Markdown'

export default function Option({ answer, userAnswer, onPress, fontSize }) {
  const fullAnswer = answer.key + ')' + ' ' + answer.text
  const isSelected = userAnswer?.answerId === answer.id
  return (
    <TouchableOpacity
      key={answer.id}
      style={styles.answer(isSelected)}
      onPress={onPress}
    >
      <View style={styles.radioContainer}>
        {isSelected ? (
          <Icon.SelectedCircle height={24} width={24} />
        ) : (
          <Icon.Circle height={24} width={24} />
        )}
      </View>
      <Markdown style={styles.optionMarkdown(fontSize)}>{fullAnswer}</Markdown>
    </TouchableOpacity>
  )
}
