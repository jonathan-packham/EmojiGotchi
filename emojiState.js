import {Component} from 'react';
import {hungerTimer, cleanTimer, lonelyTimer, deathTimer} from './timers';

export class cleaned extends Component {
    constructor(props) {
        super(props);
        let isCleaned = cleanTimer.state.isDirty;
    }
    
    render() {
        return (
            this.state.isCleaned
        )
    }
}

export class fed extends Component {
    constructor(props) {
        super(props);
        let isFed = hungerTimer.state.isHungry;
    }

    render() {
        return (
            this.state.isFed
        )
    }
}

export class happy extends Component {
    constructor(props) {
        super(props);
        let isHappy = lonelyTimer.state.isLonely;
    }

    render() {
        return (
            this.state.isHappy
        )
    }
}

export class alive extends Component {
    constructor(props) {
        super(props);
        let isAlive = deathTimer.state.isDead;
    }

    render() {
        return (
            this.state.isAlive
        )
    }
}