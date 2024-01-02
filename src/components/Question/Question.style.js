import { StyleSheet } from 'react-native'
import { padding, color } from 'style'

export default StyleSheet.create({
  answerList: {
    marginTop: 30
  },
  answer: (isSelected) => ({
    flexDirection: 'row',
    alignItems: 'center',
    padding: padding.MEDIUM,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: isSelected ? '#3C79B0' : color.LIGHT_BLUE
  }),
  answerKey: {
    color: '#fff',
    marginRight: 5
  },
  answerText: {
    color: '#fff'
  },
  text: {
    fontSize: 25
  },
  radioContainer: {
    marginRight: 10
  }
})
