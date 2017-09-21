import React, {Component, PropTypes} from 'react';
import styles from './App.css';

export default class App extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={styles.container}>
        Test
        {children}
      </div>
    );
  }
}
