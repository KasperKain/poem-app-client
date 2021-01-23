import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../routes/Home';
import Poems from '../../routes/Poems';
import Register from '../../routes/Register';
import Creator from '../../routes/Creator';
import Header from '../Header/Header';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/poems' component={Poems} />
          <Route exact path='/poems/create' component={Creator} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
