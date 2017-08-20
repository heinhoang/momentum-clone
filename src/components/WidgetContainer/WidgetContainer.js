import React, { Component } from 'react';

import './WidgetContainer.css';

class WidgetContainer extends Component {
    constructor(props) {
        super(props);
        this.toggleContainer = this.toggleContainer.bind(this);
        this.state = {
            aniOn: false,
            aniOnClass: this.props.inClass || 'fade-in-bottom',
            aniOffClass: this.props.outClass || 'fade-out-bottom'
        };
    }

    toggleContainer(e) {
        e.preventDefault();
        this.setState({ ...this.state, aniOn: !this.state.aniOn });
    }

    render() {
        const { btnText, children, additionalClass } = this.props;
        const aniCLass = this.state.aniOn ? this.state.aniOnClass : this.state.aniOffClass;
        return <div className={`widget-container ${additionalClass}`}>
            <div className="widget-wrapper">
                <div className={`widget-body ${aniCLass}`}>
                    {children}
                </div>
                <a href="#widget-btn" className="widget-btn" onClick={this.toggleContainer}>{btnText}</a>
            </div>
        </div>;
    }
};

export default WidgetContainer;