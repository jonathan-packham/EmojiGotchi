import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, Pressable, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {CleanTimer, DeathTimer, HungerTimer, LonelyTimer} from 'C:/Users/packh/mobileApp/emojiPetv4/emojiTimers';
import {CleanDisplay, DefaultDisplay, DirtyDisplay, DyingDisplay, FedDisplay, HappyDisplay, HungerDisplay, LonelyDisplay} from 'C:/Users/packh/mobileApp/emojiPetv4/emojiDisplay';

export default function App() {

  return ( 
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <HungerTimer />
        <CleanTimer />
        <LonelyTimer />
      </View>
      <View>
        <View>
          {(!HungerTimer.isHungry) ?
            <FedDisplay /> :
            <HungerDisplay />
          } || {(!CleanTimer.isDirty) ?
            <CleanDisplay /> :
            <DirtyDisplay />
          } || {(!LonelyTimer.isLonely) ?
            <HappyDisplay /> :
            <LonelyDisplay />
          } {(!DeathTimer.isDying) ? 
            <DefaultDisplay /> :
            <DyingDisplay />
          }
        </View>
        <View style={styles.horizontal}>
          <Pressable
              onPress={()=> HungerTimer.resetHungerTimer(false)}
          >
              <Text>Feed Me!!</Text>
              <View style={styles.feed} />
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
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
  timerContainer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
  }
});  