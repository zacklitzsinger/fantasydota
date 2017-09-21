import React, {Component, PropTypes} from 'react';
import styles from './App.css';

import Header from 'Header';
import Paper from 'material-ui/Paper';
import Footer from 'Footer';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class App extends Component {
  render() {
    const {children} = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className={styles.container}>
          <Header/>
          <Paper>
            Contents
          </Paper>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}
