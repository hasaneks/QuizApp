import { View, Text } from 'react-native'
import styles from './ProgressBar.style'
export default function ProgressBar({ size, title, progress }) {
  return (
    <>
      <View style={styles.header}>
        {title && <Text style={styles.title}>{title}</Text>}
        <Text style={styles.progress}>
          {size}/{progress}
        </Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar((100 / size) * progress)} />
      </View>
    </>
  )
}
