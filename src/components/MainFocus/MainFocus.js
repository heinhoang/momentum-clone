import React, { Component } from 'react';

import PromtForm from '../Promt/Promt';
import FocusText from '../FocusText/FocusText';

class MainFocus extends Component {
    constructor(props) {
        super(props);
        this.handlePromted = this.handlePromted.bind(this);
        this.newOrNewDay = this.newOrNewDay.bind(this);
        this.deleteFocus = this.deleteFocus.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.state = this.props.focus;
    }

    handlePromted(e) {
        let focus;
        if (e.key === 'Enter') {
            focus = {
                focusText: e.target.value,
                addedOn: new Date(),
                done: false
            };
            this.setState(focus);
        }
        if (window.localStorage) {
            localStorage.setItem('mainFocus', JSON.stringify(focus));
        }
    }

    deleteFocus() {
        this.setState({
            focusText: '',
            addedOn: '',
            done: ''
        });
        localStorage.removeItem('mainFocus');
    }

    toggleDone() {
        const newFocus = this.state;
        newFocus.done = !this.state.done;
        this.setState(newFocus);
        localStorage.setItem('mainFocus', JSON.stringify(newFocus));
    }

    newOrNewDay() {
        if (!this.props.focus.addedOn) {
            return true;
        }
        return this.props.focus.addedOn < new Date();
    }

    render() {

        if (this.newOrNewDay() && !this.state.focusText) {
            return <PromtForm onPromted={this.handlePromted} />
        }

        if (!this.newOrNewDay() || this.state.focusText) {
            return <FocusText focus={this.state} deleteFocus={this.deleteFocus} toggleDone={this.toggleDone} />
        }

        return null;
    }
}

export default MainFocus;