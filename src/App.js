import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import './App.css';

import MainBg from './components/MainBg/MainBg';
import InitScreen from './components/InitScreen/InitScreen';
import Clock from './components/Clock/Clock';
import MainFocus from './components/MainFocus/MainFocus';
import Forcast from './components/Forcast/Forcast';
import WidgetContainer from './components/WidgetContainer/WidgetContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.getFocus = this.getFocus.bind();
    this.getUserName = this.getUserName.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.state = { init: true };
  }

  getUserName() {
    let userName = undefined;
    if (window.localStorage) {
      userName = localStorage.getItem('momentName');
    }
    if (userName) this.setState({ init: false });
    return userName;
  }

  setUserName(e) {
    if (e.key === 'Enter' && window.localStorage) {
      localStorage.setItem('momentName', e.target.value);
      this.setState({ init: false });
    }
  };

  getFocus() {
    let focus = {};
    if (window.localStorage) {
      focus = localStorage.getItem('mainFocus');
      focus = focus ? JSON.parse(focus) : {};
    }
    return focus;
  }

  componentWillMount() {
    this.getUserName();
  }

  render() {
    const configIcon = 'config';
    return (
      <div className="app">
        <MainBg />
        {
          this.state.init ?
            <InitScreen setUserName = {this.setUserName} />
            :
            <div>
              <div className="center">
                <Clock userName={this.getUserName()} />
                <MainFocus focus={this.getFocus()} />
              </div>
              <Forcast />
              <WidgetContainer btnText='todo' additionalClass='todo-widget' >
                <div>todo</div>
              </WidgetContainer>
              <WidgetContainer btnText={configIcon} additionalClass='config-widget'>
                <div>config</div>
              </WidgetContainer>
              <WidgetContainer btnText='Links' additionalClass='links-widget' inClass='fade-in-top' outClass='fade-out-top'>
                <div>links</div>
              </WidgetContainer>
            </div>
        }
      </div>
    );
  }
}

export default App;
