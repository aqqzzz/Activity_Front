import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as Loadable from 'react-loadable'
import Header from './containers/auth/Header'


import logo from './logo.svg';

const Homepage = Loadable({
  loader: () => import('./containers/Hello'),
  loading: () => <div>loading...</div>
})
class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" component={Homepage} />
        </div>
      </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.tsx</code> and save to reload.
      //   </p>
      // </div>
      
    );
  }
}

export default App;
