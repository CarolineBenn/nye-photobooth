import React from 'react';

import { HomepageContainer } from '../Homepage';
import PhotoList from '../PhotoList';
import { PhotoPageContainer } from '../PhotoPage';
import TakeAPhoto from '../TakeAPhoto';

import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomepageContainer}/>
      <Route path='/take-photo' component={TakeAPhoto}/>
      <Route path='/photos/:id' component={PhotoPageContainer}/>
      <Route path='/photos' component={PhotoList}/>
    </Switch>
  </main>
);

export default Main;