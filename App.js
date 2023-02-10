import React, {Component} from 'react';
import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator, Pressable, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {CleanTimer, HungerTimer, LonelyTimer} from './emojiTimers';
import {EmojiDisplay} from './Emojis';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: new EmojiDisplay,
    }
  }
  render() {
    for (let i = 15; i > 0; i--) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>EmojiGotchi</Text>
          <Text style={styles.rules}>Feed, clean, and play with you Emoji!</Text>
          <Text style={styles.rules}>Otherwise, it may not survive...</Text>
          <ActivityIndicator size="large" />
          <StatusBar style="auto" />
        </View>
      )
    }
    return ( 
      <View style={styles.container}>
        <View>
          <Card>
            <View style={styles.emojiContain}>
              <EmojiDisplay />
            </View>
          </Card>
          <View style={styles.horizontal}>
            <Pressable
              onPress={()=> HungerTimer.resetHungerTimer(false)}
            >
              <Text>Feed Me!!</Text>
              <View style={styles.feed} />
            </Pressable>
            <Pressable
              onPress={()=> CleanTimer.resetCleanTimer(false)}
            >
              <Text>Clean Me!!</Text>
              <View style={styles.clean} />
            </Pressable>
            <Pressable
              onPress={()=> LonelyTimer.resetLonelyTimer(false)}
            >
              <Text>Play With Me!!</Text>
              <View style={styles.play} />
            </Pressable>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
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