import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import { Button } from 'antd'

console.log(styles)

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button type="primary">确定</Button>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
