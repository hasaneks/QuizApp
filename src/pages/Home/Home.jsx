import { SafeAreaView } from 'react-native'
import styles from './Home.style'
import { useNavigation } from '@react-navigation/native'
import Routes from 'navigation/routes'
import { Button } from 'components'
const Home = () => {
  const navigation = useNavigation()

  const createTest = () => {
    navigation.navigate(Routes.QUIZ)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Button title={'Testi Başlat'} onPress={createTest} />
    </SafeAreaView>
  )
}

export default Home
