import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Frontend/Home'
import About from '../screens/Frontend/About'
import Contact from '../screens/Frontend/Contact'
import Login from '../screens/Auth/Login'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Register from '../screens/Auth/Register'
import Patient from '../screens/Frontend/patient/Patient'
import Doctor from '../screens/Frontend/Doctor/Doctor'
import Appointments from '../screens/Frontend/Appointments/Appointments'


const Tab = createBottomTabNavigator()

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Login'>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Login' component={Login} />
                <Tab.Screen name='Register' component={Register} />
                <Tab.Screen name='Patient' component={Patient} />
                <Tab.Screen name='Doctor' component={Doctor} />
                <Tab.Screen name='Appointments' component={Appointments} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}