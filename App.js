import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QrScannerScreen from './Screens/QrScannerScreen';
import ItemsListScreen from './Screens/ItemsListScreen';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
       tabBarIcon: () => {
       if (route.name === 'QrScanner'){
        return <AntDesign name="camera" size={24} color="black"/>
        } else {
          return <Entypo name="list" size={24} color="black" />
        }
          
          }})}>
        <Tab.Screen name="QrScanner" 
        component={QrScannerScreen} 
        options={{
          headerShown: false
        }}/>
        <Tab.Screen 
        name="Items list" 
        component={ItemsListScreen}
        options={{
          headerShown: false
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
