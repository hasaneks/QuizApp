import { TouchableOpacity, Text } from 'react-native'
import styles from './Button.style'
export default function Button({
  title,
  buttonStyle,
  textStyle,
  leftIcon,
  rightIcon,
  ...props
}) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...buttonStyle }} {...props}>
      {leftIcon}
      <Text style={{ ...styles.buttonText, ...textStyle }}>{title}</Text>
      {rightIcon}
    </TouchableOpacity>
  )
}
