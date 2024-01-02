import { color, padding, typography } from 'style'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.DARK_BLUE
  },
  message_text: {
    fontSize: typography.BIG,
    marginVertical: padding.MEDIUM,
    color: color.TEXT_PRIMARY
  }
})
