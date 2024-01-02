import { TouchableOpacity } from 'react-native'
import styles from './IconButton.style'
import { color } from 'style'

export default function IconButton({
  Icon,
  iconColor = color.TEXT_PRIMARY,
  iconSize = 25,
  size = 40,
  buttonStyle,
  ...props
}) {
  return (
    <TouchableOpacity
      style={{ ...styles.button(size), ...buttonStyle }}
      {...props}
    >
      <Icon color={iconColor} iconSize={iconSize} />
    </TouchableOpacity>
  )
}
