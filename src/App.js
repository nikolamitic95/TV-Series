import React from 'react';

import './App.css';

import { HomePage } from './Components/HomePage/HomePage';
import { InfoPage } from './Components/InfoPage/InfoPage';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import { SeasonsPage } from './Components/SeasonsPage/SeasonsPage';
import { CastPage } from './Components/CastPage/CastPage';
import { CrewPage } from './Components/CrewPage/CrewPage';
import { AkasPage } from './Components/AkasPage/AkasPage';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/info/:id' component={InfoPage} />
        <Route exact path='/info/seasons/:id' component={SeasonsPage} />
        <Route exact path='/info/cast/:id' component={CastPage} />
        <Route exact path='/info/crew/:id' component={CrewPage} />
        <Route exact path='/info/akas/:id' component={AkasPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
