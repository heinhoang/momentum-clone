import React, { Component } from 'react';
import axios from 'axios';

import './Forcast.css';

import { FORCAST_API_KEY, FORCAST_URL } from '../../constants';


class Forcast extends Component {
    constructor(props) {
        super(props);
        this.state = { forcastData: null };
        this.getForcast = this.getForcast.bind(this);
    }

    getForcast(position) {
        const url = `${FORCAST_URL}?key=${FORCAST_API_KEY}&q=${position.coords.latitude},${position.coords.longitude}`;
        // const config = {
        //     headers: {
        //         'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        //         'X-Requested-With': 'XMLHttpRequest'
        //     }
        // };
        axios.get(url)
            .then(res => {
                this.setState({ forcastData: res.data });
            })
            .catch(e => new Error('meet error on forcast fetching'));
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getForcast);
        } else {
            new Error('Geolocation is not supported by this browser.');
        }
        // const url = `${FORCAST_URL}?key=${FORCAST_API_KEY}&q=hcm`;
        // axios.get(url)
        //     .then(res => {
        //         console.log(res);
        //         this.setState({ forcastData: res.data });
        //     })
        //     .catch(e => new Error('meet error on forcast fetching'));
    }

    render() {
        return this.state.forcastData ? (<div className="forcast">
            <span className="forcast-stats">
                <img className="forcast-icon" src={this.state.forcastData.current.condition.icon} alt="wheather icon"/>
                <span className="forcast-temperature">{this.state.forcastData.current.temp_c}</span>
            </span>
            <div className="forcast-city">{this.state.forcastData.location.name}</div>
        </div>) : null;
    }

}

export default Forcast;