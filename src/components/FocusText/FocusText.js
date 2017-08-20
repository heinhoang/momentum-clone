import React, { Component } from 'react';

import './FocusText.css';

class FocusText extends Component {
    render() {
        const { focus, deleteFocus, toggleDone } = this.props;
        const focusClass = focus.done ? 'focus-text strike' : 'focus-text';

        return <div className='today-focus'>
            <h4>TODAY</h4>
            <div className="focus-info">
                <span className="focus-control">
                    <i className="left fa fa-circle-o" onClick={toggleDone}></i>
                    <i className="right fa fa-times-circle-o" onClick={deleteFocus}></i>
                </span>
                <p className={focusClass}>{focus.focusText}</p>
            </div>
        </div>;
    }
}

export default FocusText;