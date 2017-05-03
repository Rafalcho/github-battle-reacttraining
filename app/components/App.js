import React from 'react';
import Popular from './Popular';
import ReactRouter, {Router, Route, Switch} from 'react-router-dom';
import {Nav} from './Nav';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route path='/popular' component={Popular} />
        </div>
      </Router>

    );
  }
}

export default App;
