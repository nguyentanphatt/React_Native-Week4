//import { Text, View, StyleSheet, Image, Button } from 'react-native';
import react from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Tiki from './components/Tiki';
import Password from './components/Password';
export default function App() {

  const Drawer = createDrawerNavigator()

  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Tiki'>
        <Drawer.Screen name='Tiki' component={Tiki}/>
        <Drawer.Screen name='GeneratePassword' component={Password}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
