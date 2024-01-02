import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import routes from './routes'
import { Home, Quiz } from 'pages'

const Stack = createStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.HOME} component={Home} />
        <Stack.Screen name={routes.QUIZ} component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
