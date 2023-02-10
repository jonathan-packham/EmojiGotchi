import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Loading Screen Timer
/*export class LoadTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadTime: 15,
            loaded: false,
            loadedTrue: 0,
        }
    }

    loadTimerDidMount() {
        this.loadTimerID = setInterval(
            () => this.loadingTick(), 1000
        );
    }

    loadingTick() {
        let newLoadTime = this.state.loadTime - 1;
        let isLoaded = this.state.loaded;
        if (newLoadTime == this.state.loadedTrue) {
            isLoaded = true;
        }
        this.setState({
            loadTime: newLoadTime,
            loaded: isLoaded,
        })
    }

    loadTimerDidUnmount() {
        clearInterval(this.loadTimerID);
    }

    render() {
        return (
            this.state.loaded
        );
    }
}*/

// Hunger Timer
export class HungerTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hungerTime: 7200,
            hungerAlarmTime: 100,
            isHungry: false,
        }
    }

    resetHungerTimer(food) {
        this.setState = ({
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

    format(seconds) {
        return new Date(seconds * 1000).toISOString().slice(11,19);
    }

    render() {
        return (
            <View style={{flex: 0.5, alignContent: 'center', justifyContent: 'center'}}>
                {(!this.state.isHungry) ?
                    <Text>{this.format(this.state.hungerTime)}</Text> :
                    <Text style={{fontWeight: 'bold', color: 'red'}}>Feed Me!!</Text>
                }
            </View>
        )
    }
}

// Dirty Timer 
export class CleanTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cleanTime: 7200,
            cleanAlarmTime: 200,
            isDirty: false,
        }
    }

    resetCleanTimer(soap) {
        this.setState({
            cleanTime: 7200,
            isDirty: soap,
        })
    }

    cleanTimerDidMount() {
        this.cleanTimerID = setInterval(
            () => this.cleanTick(), 1000
        );
    }

    cleanTick() {
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

    format(seconds) {
        return new Date(seconds * 1000).toISOString().slice(11,19);
    }

    render() {
        return (
            <View style={{flex: 0.5, alignContent: 'center', justifyContent: 'center'}}>
                {(!this.state.isDirty) ? 
                    <Text>{this.format(this.state.cleanTime)}</Text> : 
                    <Text style={{fontWeight: 'bold', color: 'red'}}>Clean Me!!</Text>
                }
            </View>
        )
    }
}

// Lonely Timer
export class LonelyTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lonelyTime: 7200,
            lonelyAlarmTime: 300,
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

    format(seconds) {
        return new Date(seconds * 1000).toISOString().slice(11,19);
    }

    render() {
        return (
            <View style={{flex: 0.5, alignContent: 'center', justifyContent: 'center'}}>
                {(!this.state.isLonely) ?
                    <Text>{this.format(this.state.lonelyTime)}</Text> :
                    <Text style={{fontWeight: 'bold', color: 'red'}}></Text>
                }
            </View>
        )
    }
}

export class DeathTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deathTime: 10800,
            deathAlarmTime: 0,
            isDying: false,
        }
    }

    resetDeathTimer(saved) {
        this.setState({
            deathTime: 10800,
            isDying: saved,
        })
    }

    deathTimerDidMount() {
        this.DeathTimerID = setInterval(
            () => this.deathTick(), 1000
        );
    }

    deathTick() {
        let newDeathTime = this.state.deathTime - 1;
        let newDeath = this.state.isDying;
        if (newDeathTime == this.state.deathAlarmTime) {
            newDeath = true;
        }
        this.setState({
            deathTime: newDeathTime,
            isDying: newDeath,
        })
    }

    deathTimerDidUnmount() {
        clearInterval(this.deathTimerID);
    }

    format(seconds) {
        return new Date(seconds * 1000).toISOString().slice(11,19);
    }

    render() {
        return (
            <View style={{flex: 0.5, alignContent: 'center', justifyContent: 'center'}}>
                {(!this.state.isDying) ?
                    <Text>{this.format(this.state.deathTime)}</Text> :
                    <Text style={{fontWeight: 'bold'}}>How could you let me die....</Text>
                }
            </View>            
        )
    }
}