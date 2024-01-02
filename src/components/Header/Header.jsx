import { View, Text } from 'react-native'
import styles from './Header.style'
import IconButton from '../common/IconButton'
import * as Icon from 'assets/svg'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { formatTime } from 'helpers/utils'

export default function Header({ title, showTimer, onPressRightButton }) {
  const navigation = useNavigation()
  const [durationInSeconds, setDurationInSeconds] = useState(0)

  useEffect(() => {
    if (!showTimer) {
      return
    }

    const timerInterval = setInterval(() => {
      setDurationInSeconds((prevDuration) => prevDuration + 1)
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [])

  return (
    <View style={styles.container}>
      <IconButton
        Icon={Icon.ArrowLeft}
        iconSize={25}
        size={35}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.titleContainer}>
        {title && !showTimer && <Text style={styles.title}>{title}</Text>}
        {showTimer && (
          <Text style={styles.title}>{formatTime(durationInSeconds)}</Text>
        )}
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
