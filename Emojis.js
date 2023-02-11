import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Timer} from './emojiTimers';

export class EmojiDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: null,
            emojiName: props.emojiName,
            hungerBar: 100,
            dirtyBar: 100,
            lonelyBar: 100,
            isDead: false,
        }
    }

    setHungerBar = (percent) => {
        this.setState({
            hungerBar: percent,
        });
    }

    setDirtyBar = (percent) => {
        this.setState({
            dirtyBar: percent,
        });
    }

    setLonelyBar = (percent) => {
        this.setState({
            lonelyBar: percent,
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    tick() {
        let avgTimeLeft = ((this.state.hungerBar + this.state.dirtyBar + this.state.lonelyBar) / 3);
        if (avgTimeLeft == 0) {
            this.setState ({
                isDead: true,
                display: <Image style={styles.emoji} source={require('./assets/dead.jpg')} />,
            })
            clearInterval(this.TimerID);
        } else if (avgTimeLeft > 0 && avgTimeLeft <= 25) {
            this.setState({
                display: <Image style={styles.emoji} source={require('./assets/dying.jpg')} />,
            })
        } else if (avgTimeLeft >= 26 && avgTimeLeft <= 50) {
            this.setState({
                display: <Image style={styles.emoji} source={require('./assets/hungry.jpg')} />,
            })
        } else if (avgTimeLeft >= 51 && avgTimeLeft <= 75) {
            this.setState({
                display: <Image style={styles.emoji} source={require('./assets/dirty.jpg')} />
            })
        } else if (avgTimeLeft >= 76 && avgTimeLeft <= 100) {
            this.setState({
                display: <Image style={styles.emoji} source={require('./assets/default.jpg')} />
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <>
            <View style={styles.timerContainer}>
                <Timer barColor={'red'} barText={'Hunger'} btnText={'Feed'} callback={this.setHungerBar} />
            </View>
            <View style={styles.timerContainer}>
                <Timer barColor={'green'} barText={'Happiness'} btnText={'Play'} callback={this.setLonelyBar} />
            </View>
            <View style={styles.timerContainer}>
                <Timer barColor={'lightblue'} barText={'Cleanliness'} btnText={'Clean'} callback={this.setDirtyBar} />
            </View>
            <View style={{height: 100,}} />
            <View style={styles.emojiContain}>
                {this.state.display}
            </View>
            </>
        )
    }
}

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
    timerContainer: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
})