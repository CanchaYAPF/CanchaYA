import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Form from './components/Form/Form';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/agregar-cancha" component={Form} />
      </Switch>
    </Router>
  );
};

export default App;
