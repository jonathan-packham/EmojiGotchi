import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
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
  const [emojiName, setName] = React.useState('');
  const [placeholder] = React.useState('Name: ');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EmojiGotchi!</Text>
      <Text style={styles.rules}>Feed, clean, and play with your EmojiGotchi!</Text>
      <Text style={styles.rules}>Otherwise, it may not survive!</Text>
      <Text style={styles.rules}>Please name your pet before entering!</Text>
      <View>
        <TextInput style={styles.input}
          onChangeText={setName}
          value={emojiName}
          placeholder={placeholder}
        />
      </View>
      {(emojiName == '') ?
        <ActivityIndicator size="large" /> :
        <Pressable
          onPress={() => {navigation.navigate('MainScreen', {emojiName: emojiName})}}
        >
          <Text>Start Game!</Text>
          <View style={styles.startBtn} />
        </Pressable>  
      }
      <StatusBar style="auto" />
    </View>
  )
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
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
  startBtn: {
    color: 'blue',
    height: 30,
    width: 50,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'blue',
  },
});  