import React, { Component } from 'react';

import { HomepageContainer } from '../Homepage';
import Photos from '../Photos';
import { PhotoPageContainer } from '../PhotoPage';
import TakeAPhoto from '../TakeAPhoto';

import { Switch, Route } from 'react-router-dom';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <main>
        <Switch>
          <Route exact path='/' component={HomepageContainer}/>
          <Route path='/take-photo' component={TakeAPhoto}/>
          <Route path='/photos/:id' component={PhotoPageContainer}/>
          <Route path='/photos' component={Photos}/>
        </Switch>
      </main>
      </div>
    );
  }
}

export default App;
