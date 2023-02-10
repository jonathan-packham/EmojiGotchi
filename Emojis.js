import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {CleanTimer, DeathTimer, HungerTimer, LonelyTimer} from './emojiTimers';

export class EmojiDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojiState: './assets/default.jpg',
            isNotClean: CleanTimer.state.isDirty,
            isNotFed: HungerTimer.state.isHungry,
            isNotHappy: LonelyTimer.state.isLonely,
            isNotAlive: DeathTimer.state.isDying,
        }
    }

    emojiDisplayDidMount() {
        this.emojiDisplayID = setInterval(
            () => this.emojiDisplayTick(), 5000
        )
    }

    emojiDisplayTick() {
        let source = this.state.emojiState;
        if (this.state.isNotClean) {
            source = './assets/dirty.jpg';
        } else if (this.state.isNotFed) {
            source = './assets/hungry.jpg';
        } else if (this.state.isNotHappy) {
            source = './assets/lonely.jpg';
        } else if (this.state.isNotClean && this.state.isNotFed && this.state.isNotHappy) {
            source = './assets/dying.jpg';
        } else if (this.state.isNotAlive) {
            source = './assets/dead.jpg';
        } else {
            source = './assets/default.jpg';
        }
        this.setState({
            emojiState: source,
        })
    }

    emojiDisplayDidUnmount() {
        clearInterval(this.emojiDisplayID);
    }

    render() {   
        return (
            <Image style={styles.emoji} source={require(this.state.emojiState)} />
        );
    }
}

const styles = StyleSheet.create({
    emoji: {
        height: 150,
        width: 150,
    },
    timerContainer: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
})