import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator, Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Card} from 'react-native-paper';
import {CleanTimer, HungerTimer, LonelyTimer} from './emojiTimers';
import {EmojiDisplay} from './Emojis';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoadingScreen"
          component={LoadingScreen}
        />
        <Stack.Screen name="EmojiScreen"
          component={EmojiScreen}
          options={
            ({route}) => ({
              title: route.params.emojiName,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                textDecorationLines: 'underline',
                color: 'blue',
              }
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const LoadingScreen = ({navigation}) => {


  navigation = 
}

const styles = StyleSheet.create({
  clean: {
    color: 'blue',
    height: 30,
    width: 30,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiContain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
  },
  feed: {
    color: 'green',
    height: 30,
    width: 30,
    padding: 10,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  play: {
    color: 'red',
    height: 30,
    width: 30,
    padding: 10,
  },
  rules: {
    fontSize: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
  }
});  