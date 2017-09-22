import React, {Component} from 'react';
import styles from './App.css';

import Header from 'components/Header';
import Home from 'components/Home';
import Footer from 'components/Footer';

import {Route} from 'react-router-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className={styles.container}>
          <Header/>
          <Route exact path='/' component={Home}/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}