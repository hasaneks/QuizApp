import { StyleSheet } from 'react-native'
import { padding, color } from 'style'

export default StyleSheet.create({
  answer: (isSelected) => ({
    flexDirection: 'row',
    alignItems: 'center',
    padding: padding.MEDIUM,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: isSelected ? '#3C79B0' : color.LIGHT_BLUE
  }),
  radioContainer: {
    marginRight: 10
  },
  optionMarkdown: (fontSize) => ({
    body: {
      flex: 1
    },
    text: {
      fontSize: fontSize,
      lineHeight: fontSize + 10,
      color: color.TEXT_PRIMARY
    }
  })
})
