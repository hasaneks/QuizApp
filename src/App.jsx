import 'react-native-gesture-handler'
import Navigation from './navigation/Navigation'
import { StatusBar } from 'react-native'
import Provider from './redux/Provider'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
const App = () => {
  return (
    <Provider>
      <StatusBar barStyle={'light-content'} />
      <ActionSheetProvider>
        <Navigation />
      </ActionSheetProvider>
    </Provider>
  )
}

export default App
