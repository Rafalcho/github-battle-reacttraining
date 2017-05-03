import React from 'react';
import Popular from './Popular';
import ReactRouter, {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Nav} from './Nav';
import {Home} from './Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route path='/' component={Home} />
          <Route path='/popular' component={Popular} />
        </div>
      </Router>

    );
  }
}

export default App;
