import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

export class CleanDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('C:/Users/packh/mobileApp/emojiPetv4/assets/clean.jpg')} />
            </View>
        )
    }
}

export class DirtyDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('C:/Users/packh/mobileApp/emojiPetv4/assets/dirty.jpg')} />
            </View>
        )
    }
}

export class FedDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('C:/Users/packh/mobileApp/emojiPetv4/assets/fed.jpg')} />
            </View>
        )
    }
}

export class HungryDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('C:/Users/packh/mobileApp/emojiPetv4/assets/hungry.jpg')} />
            </View>
        )
    }
}

export class HappyDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('C:/Users/packh/mobileApp/emojiPetv4/assets/playedWith.jpg')} />
            </View>
        )
    }
}

export class LonelyDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('C:/Users/packh/mobileApp/emojiPetv4/assets/lonely.jpg')} />
            </View>
        )
    }
}

export class DyingDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('C:/Users/packh/mobileApp/emojiPetv4/assets/dying.jpg')} />
            </View>
        )
    }
}

export class DeadDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('C:/Users/packh/mobileApp/emojiPetv4/assets/dead.jpg')} />
            </View>
        )
    }
}

export class DefaultDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image  style={styles.emoji} source={require('C:/Users/packh/mobileApp/emojiPetv4/assets/default.jpg')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
})