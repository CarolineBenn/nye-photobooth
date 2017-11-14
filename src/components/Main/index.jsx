import React from 'react';

import Homepage from '../Homepage';
import PhotoList from '../PhotoList';
import { PhotoPageContainer } from '../PhotoPage';

import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/photos/:id' component={PhotoPageContainer}/>
      <Route path='/photos' component={PhotoList}/>
    </Switch>
  </main>
);

export default Main;