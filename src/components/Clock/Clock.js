import React, { Component } from 'react';

import './Clock.css';

// add zero before single number
const formatSingleNum = (time, prefix = '0') => time < 10 ? `${prefix}${time}` : time;

// get part of day
const getPartDay = (time) => {
    if (time > '20:00')
        return 'night';
    if (time > '12:00')
        return 'afternoon';
    return 'morning';
};

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
        this.tick = this.tick.bind(this);
    }


    tick() {
        this.today = new Date();
        this.setState({
            hours: formatSingleNum(this.today.getHours()),
            minutes: formatSingleNum(this.today.getMinutes()),
            seconds: formatSingleNum(this.today.getSeconds())
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 500);
    }

    componentWillUnMount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="Clock">
                <h1 className="ClockText">
                    {`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`}
                </h1>
                <h2 className="ClockInfo">
                    Good {`${getPartDay(`${this.state.hours}:${this.state.minutes}`)}`}, {this.props.userName}
                </h2>
            </div>
        );
    }
};

export default Clock;