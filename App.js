import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator(
	{
		Home: SearchScreen
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'Websearch',
			headerStyle: {
				backgroundColor: '#181c42'
			},
			headerTitleStyle: {
				color: '#fff'
			},
			headerTintColor: '#fff'
		}
	}
)

export default createAppContainer(navigator)
