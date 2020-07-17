import React from 'react';

import './App.css';

import { HomePage } from './Components/HomePage/HomePage';
import { InfoPage } from './Components/InfoPage/InfoPage';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/info/:id' component={InfoPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
