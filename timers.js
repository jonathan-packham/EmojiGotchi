import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Formatter from './formatter.js';

//timer for loading screen
export class loadTimer extends Component {
    constructor(props) {
        super(props);
        let loadTime = 15;
        this.state = {
            loadAlarmTime: 0,
            loadAlarmTrigger: false,
        }
    }

    loadTimerDidMount() {
        this.loadTimerID = setInterval(
            () => this.loadingTick(), 1000
        );
    }

    loadingTick() {
        let newLoadTime = this.state.loadTimer - 1;
        let newLoadAlarmTrigger = this.state.loadAlarmTrigger
        if (newLoadTime == loadAlarmTime) {
            newLoadAlarmTrigger = true;
        }
        this.setState({
            loadTimer: newLoadTime,
            loadAlarmTrigger: newLoadAlarmTrigger,
        })
    }

    loadTimerDidUnmount() {
        clearInterval(this.loadTimerID);
    }

    render() {
        return (
            this.state.loadTime
        );
    }
}

// Hunger Timer
export class hungerTimer extends Component {
    constructor(props) {
        super(props);
        let hungerTime = props.initialHunger || 0;
        this.state = {
            hungerAlarmTime: 0,
            isHungry: false,
        }
    }

    resetHungerTimer(food) {
        this.setState=({
            hungerTime: 7200,
            isHungry: food,
        })
    }
    hungerTimerDidMount() {
        this.hungerTimerID = setInterval(
            () => this.hungerTick(), 1000
        );
    }

    hungerTick() {
        let newHungerTime = this.state.hungerTime - 1;
        let newHunger = this.state.isHungry;
        if (newHungerTime == this.state.hungerAlarmTime) {
            newHunger = true;
        }
        this.setState({
            hungerTime: newHungerTime,
            isHungry: newHunger,
        })
    }

    hungerTimerDidUnmount() {
        clearInterval(this.hungerTimerID);
    }

    render() {
        return (
            <View style={{flex: 0.5, alignContent: 'center', justifyContent: 'center'}}>
                {(!this.state.isHungry) ? 
                    <Text>{Formatter.format(this.state.hungerTime)}</Text> :
                    <Text style={{fontStyle: 'bold', color: 'red'}}>Feed Me!!</Text>   
                }
            </View>
        );
    }
}

// Cleanliness Timer
export class cleanTimer extends Component {
    constructor(props) {
        super(props);
        let cleanTime = props.initialDirty || 0;
        this.state = {
            cleanAlarmTime: 0,
            isDirty: false,
        }
    }

    resetCleanTimer(soap) {
        this.setState({
            cleanTime: 7200,
            isDirty: false,
        })
    }

    cleanTimerDidMount() {
        this.cleanTimerID = setInterval(
            () => this.hungerTick(), 1000
        );
    }

    cleaningTick() {
        let newCleanTime = this.state.cleanTime - 1;
        let newDirty = this.state.isDirty;
        if (newCleanTime == this.state.cleanAlarmTime) {
            newDirty = true;
        }
        this.setState({
            cleanTime: newCleanTime,
            isDirty: newDirty,
        })
    }

    cleanTimerDidUnmount() {
        clearInterval(this.cleanTimerID);
    }

    render() {
        return (
            <View style={{flex: 0.5, alignContent: 'center', justifyContent: 'center'}}>
                {(!this.state.isDirty) ?
                    <Text>{Formatter.format(this.state.cleanTime)}</Text> :
                    <Text style={{fontStyle: 'bold', color: 'red'}}>Clean Me!!</Text>
                }
            </View>
        );
    }
}

// Lonely Timer
export class lonelyTimer extends Component {
    constructor(props) {
        super(props);
        let lonelyTime = props.initialLonely || 0;
        this.state = {
            lonelyAlarmTime: 0,
            isLonely: false,
        }
    }

    resetLonelyTimer(play) {
        this.setState = ({
            lonelyTime: 7200,
            isLonely: play,
        })
    }
    lonelyTimerDidMount() {
        this.lonelyTimerID = setInterval(
            () => this.lonelyTick(), 1000
        );
    }

    lonelyTick() {
        let newLonelyTime = this.state.lonelyTime - 1;
        let newLonely = this.state.isLonely;
        if (newLonelyTime == this.state.lonelyAlarmTime) {
            newLonely = true;
        }
        this.setState({
            lonelyTime: newLonelyTime,
            isLonely: newLonely,
        })
    }

    lonelyTimerDidUnmount() {
        clearInterval(this.lonelyTimerID);
    }

    render() {
        return (
            <View style={{flex: 0.5, alignContent: 'center', justifyContent: 'center'}}>
                {(!this.state.isLonely) ?
                    <Text>{Formatter.format(this.state.lonelyTime)}</Text> :
                    <Text style={{fontStyle: 'bold', color: 'red'}}>Please Play with Me!!</Text>
                }
            </View>
        );
    }
}

export class deathTimer extends Component {
    constructor(props) {
        super(props);
        let deathTime = props.setDeath || 0;
        this.state = {
            deathAlarmTime: 0,
            isDead: false,
        }
    }

    resetDeathTimer(saved) {
        this.setState = ({
            deathTime: 7200,
            isDead: saved,
        })
    }
    deathTimerDidMount() {
        this.deathTimerID = setInterval(
            () => this.deathTick(), 1000
        );
    }

    deathTick() {
        let newDeathTime = this.state.deathTime - 1;
        let newDeath = this.state.isDead;
        if (newDeathTime == this.state.deathAlarmTime) {
            newDeath = true;
        }
        this.setState({
            deathTime: newDeathTime,
            isDead: newDeath,
        })
    }

    deathTimerDidUnmount() {
        clearInterval(this.deathTimerID);
    }

    render() {
        return (
            this.state.deathTime
        );
    }
}