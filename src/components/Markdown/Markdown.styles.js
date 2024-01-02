import { StyleSheet } from 'react-native'
import { padding, color, typography } from 'style'

export default StyleSheet.create({
  body: {
    flex: 1
  },
  text: {
    fontSize: typography.NORMAL,
    color: color.TEXT_PRIMARY,
    lineHeight: 25
  },
  heading1: {
    fontSize: 32,
    backgroundColor: '#000000',
    color: 'red'
  },
  heading2: {
    fontSize: 24
  },
  heading3: {
    fontSize: 18
  },
  heading4: {
    fontSize: 16
  },
  heading5: {
    fontSize: 13
  },
  heading6: {
    fontSize: 11
  }
})
