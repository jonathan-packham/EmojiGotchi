import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator, Keyboard, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {EmojiDisplay} from './Emojis';

const Stack = createNativeStackNavigator();

const dismissKeyboard = () => {
  Keyboard.dismiss();
}

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

  navigate = (screen, emojiName) => {
    screen = screen;
    emojiName = emojiName;
    {navigation.navigate(screen, {emojiName: emojiName});};
  }

  return (
    <Pressable style={styles.container} onPress={dismissKeyboard}>
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
          onPress={() => {navigation.navigate('EmojiScreen', {emojiName: emojiName})}}
        >
          <Text>Start Game!</Text>
          <View style={styles.startBtn} />
        </Pressable>  
      }
      <StatusBar style="auto" />
    </Pressable>
  )
}

const EmojiScreen = ({navigation, route}) => {
  return (
    <View styles={styles.container}>
        <EmojiDisplay emojiName={route.params.emojiName} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
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