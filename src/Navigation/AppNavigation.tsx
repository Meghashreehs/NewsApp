import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import Detail from '../Screens/Detail'
import Fashion from '../Screens/Fashion'
import Home from '../Screens/Home'
import Local from '../Screens/Local'
import Models from '../Screens/Models'
import NewsDrawer from './NewsDrawer'

export type AppStackParamList = {
    default: undefined,
    NewsDrawer: undefined,
    Fashion: undefined,
    Model: undefined,
    Local: undefined,
    Detail: undefined
}

export type AppStackNavigationProps<
    T extends keyof AppStackParamList = 'default'
    > = StackNavigationProp<AppStackParamList, T>

const AppStack = createStackNavigator<AppStackParamList>()

const AppNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
                screenOptions={{ gestureEnabled: false }}
            >
                <AppStack.Screen name={'NewsDrawer'} component={NewsDrawer} />
                <AppStack.Screen name={'Fashion'} component={Fashion} />
                <AppStack.Screen name={'Model'} component={Models} />
                <AppStack.Screen name={'Local'} component={Local} />
                <AppStack.Screen name={'Detail'} component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
