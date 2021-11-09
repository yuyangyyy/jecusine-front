import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Plats from './pages/Plats';
import Actus from './pages/Actus';
import Contact from './pages/Contact';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/plats" exact component={Plats} />
        <Route path="/actus" exact component={Actus} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
