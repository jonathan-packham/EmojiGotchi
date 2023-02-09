import {Component} from 'react';

export class Formatter extends Component{
    constructor(props) {
        super(props);
    }

    format = (seconds) => {
        return new Date(seconds * 1000).toISOString().slice(11, 19);
    }
}