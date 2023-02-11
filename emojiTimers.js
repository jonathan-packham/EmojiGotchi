import React, {Component} from 'react';
import {Pressable, Text, StyleSheet, View} from 'react-native';

export class Timer extends Component {
    constructor(props) {
        super(props);
        let barColor = props.barColor;
        let barText = props.barText;
        let btnText = props.btnText;
        this.state = {
            timer: 20,
            timerAlarmTime: 0,
            timerAlarmTrigger: false,
            barPercent: 100,
            barColor: barColor,
            barText: barText,
            btnText: btnText,
            barTime: props.callback,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    tick() {
        let tempTime = this.state.timer;
        let newTimer = this.state.timer - 1;
        if (newTimer <= this.state.timerAlarmTime) {
            this.setState({
                timer: 0,
                barPercent: 0,
            })
        } else {
            this.setState({
                barPercent: ((newTimer / tempTime) * 100),
                timer: newTimer,
            })
        }
        this.state.barTime(this.state.barPercent);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    resetTimer = () => {
        let reset = 20;
        this.setState({
            timer: reset,
        })
    }

    render() {
        return (
            <>
            <View style={styles.timerBar}>
                <View style={[{backgroundColor: this.state.barColor, width: this.state.barPercent + '%', height: '100%',}]}></View>
                <Text style={styles.barText}>{this.state.barText}</Text>
            </View>
            <Pressable
                style={[{backgroundColor: this.state.barColor,}, styles.btn]}
                onPress={() => this.resetTimer()}
            >
                <Text>{this.state.btnText}</Text>
            </Pressable>
            </>
        );
    }
}

const styles = StyleSheet.create({
    barText: {
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        fontSize: 15,
    },
    btn: {
        height: 60,
        width: 60,
        padding: 10,
    },
    timerBar: {
        borderColor: 'black',
        borderWidth: 1,
        width: '45%',
        height: 30,
        padding: 10,
    },
})