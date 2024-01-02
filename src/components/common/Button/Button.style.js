import { StyleSheet } from 'react-native'
import { color, padding } from 'style'

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: padding.MEDIUM,
    backgroundColor: '#000',
    borderRadius: 10
  },
  buttonText: {
    color: color.TEXT_PRIMARY,
    textAlign: 'center',
    fontWeight: '700'
  }
})
