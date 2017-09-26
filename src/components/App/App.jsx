import React, {Component} from 'react';
import styles from './App.css';

import Header from 'components/Header';
import Home from 'components/Home';
import Teams from 'components/Teams';
import Team from 'components/Team';
import Players from 'components/Players';
import PlayerInfo from 'components/PlayerInfo';
import Footer from 'components/Footer';

import {Route} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './muiTheme';


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={styles.container}>
          <Header />
          <Route exact path='/' component={Home}/>
          <Route exact path='/teams' component={Teams}/>
          <Route exact path='/teams/:id' component={Team}/>
          <Route exact path='/players' component={Players}/>
          <Route exact path='/players/:id' component={PlayerInfo}/>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
