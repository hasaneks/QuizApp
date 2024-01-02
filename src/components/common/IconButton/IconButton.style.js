import { StyleSheet } from 'react-native'
import { color, padding } from 'style'

export default StyleSheet.create({
  button: (size) => ({
    alignItems: 'center',
    justifyContent: 'center',
    height: size,
    width: size,
    backgroundColor: '#346796',
    borderRadius: 5
  }),
  buttonText: {
    color: color.TEXT_PRIMARY
  }
})
