import { View, Text } from 'react-native'
import styles from './Header.style'
import IconButton from '../common/IconButton'
import * as Icon from 'assets/svg'
import { useNavigation } from '@react-navigation/native'

export default function Header({ title, onPressRightButton }) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <IconButton
        Icon={Icon.ArrowLeft}
        iconSize={25}
        size={35}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <IconButton
        Icon={Icon.MoreHorizontal}
        iconSize={25}
        size={35}
        onPress={onPressRightButton}
      />
    </View>
  )
}
