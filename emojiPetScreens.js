import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {cleanTimer, hungerTimer, loadTimer, lonelyTimer} from './timers';
import {cleaned, fed, happy, alive} from './emojiState.js';
import {emojiDisplay} from './emojiDisplay.js';

export default function emojiPetScreens() {
    let loadTime = new loadTimer();
    if (loadTime > 0) {
        return (
            <View style={styles.container}>
                <Text>EmojiGotchi</Text>
                <View style={styles.gap}></View>
                <Text>Feed, bathe, and play with your emoji to keep its stats up!</Text>
                <View style={styles.gap}></View>
                <Text>Otherwise, it may not survive...</Text>
                <View style={styles.gap}></View>
                <ActivityIndicator />
                <StatusBar style="auto" />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.timerContain}>
                    <Text><hungerTimer initialHunger={7200} /></Text>
                    <Text><cleanTimer initialDirty={7200} /></Text>
                    <Text><lonelyTimer initialLonely={7200} /></Text>
                </View>
                <View>
                    <View style={styles.horizontal}>
                        if({!fed}) {
                            emojiDisplay.hungryDisplay()
                        }
                        if({!cleaned}) {
                            emojiDisplay.dirtyDisplay()
                        }
                        if({!happy}) {
                            emojiDisplay.lonelyDisplay()
                        }
                        if({!fed && !cleaned && !happy}) {
                            emojiDisplay.dyingDisplay()
                        }
                        if ({!alive}) {
                            emojiDisplay.deadDisplay()
                        }
                        {emojiDisplay.defaultDisplay()};
                        <Pressable 
                            onPress={() => hungerTimer.resetHungerTimer(false)}
                        >
                            {emojiDisplay.fedDisplay()};
                            <Text>Feed Me!</Text>
                            <View style={styles.petBtn} />
                        </Pressable>
                        <Pressable
                            onPress={() => cleanTimer.resetCleanTimer(false)}
                        >
                            {emojiDisplay.cleanDisplay()};
                            <Text>Give me a bath!</Text>
                            <View style={styles.petBtn} />
                        </Pressable>
                        <Pressable 
                            onPress={() => lonelyTimer.resetLonelyTimer(false)}
                        >   
                            {emojiDisplay.happyDisplay()};
                            <Text>Play with me!</Text>
                            <View style={styles.petBtn} />
                        </Pressable>
                    </View>
                    <StatusBar style="auto" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    container: {
        flex: 1,
        backgroundCOlor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gap: {
        height: 10,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    petBtn: {
        width: 100,
        height: 100,
        margin: 10,
        padding: 20,
        borderRadius: 10,
    },
    timerContain: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
})