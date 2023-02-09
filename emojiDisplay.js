import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

export class cleanDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('./assets/clean.jpg')} />
            </View>
        )
    }
}

export class dirtyDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('./assets/dirty.jpg')} />
            </View>
        )
    }
}

export class fedDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('./assets/fed.jpg')} />
            </View>
        )
    }
}

export class hungryDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('./assets/hungry.jpg')} />
            </View>
        )
    }
}

export class happyDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('./assets/playedWith.jpg')} />
            </View>
        )
    }
}

export class lonelyDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('./assets/lonely.jpg')} />
            </View>
        )
    }
}

export class dyingDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('./assets/dying.jpg')} />
                <Text>Please don't let me die.....</Text>
            </View>
        )
    }
}

export class deadDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image style={styles.emoji} source={require('./assets/dead.jpg')} />
            </View>
        )
    }
}

export class defaltDisplay extends Component {
    render() {
        return (
            <View style={styles.emojiContain}>
                <Image  style={styles.emoji} source={require('./assets/default.jpg')} />
            </View>
        )
    }
}

export default emojiDisplay();

const styles = StyleSheet.create({
    emoji: {
        height: 150,
        width: 150,
    },
    emojiContain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: 300,
    },
})