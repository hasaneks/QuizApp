import 'react-native-gesture-handler'
import Navigation from './navigation/Navigation'
import { StatusBar } from 'react-native'
import Provider from './redux/Provider'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import ErrorBoundary from './container/ErrorBoundary'
const App = () => {
  return (
    <ErrorBoundary>
      <Provider>
        <StatusBar barStyle={'light-content'} />
        <ActionSheetProvider>
          <Navigation />
        </ActionSheetProvider>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
