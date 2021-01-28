import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../routes/Home';
import Poems from '../routes/Poems';
import Register from '../routes/Register';
import Creator from '../routes/Creator';
import Header from '../components/Header/Header';
import { PoemContextProvider } from '../context/poemContext';
import { StyleContextProvider } from '../context/styleContext';
import BackgroundCanvas from '../canvas_components/BackgroundCanvas';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className='App'>
      <PoemContextProvider>
        <StyleContextProvider>
          <Router>
            <Header />
            <main>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/poems' component={Poems} />
                <Route exact path='/poems/create' component={Creator} />
                <Route exact path='/poems/create/:id' component={Creator} />

                <Route exact path='/users/register' component={Register} />
              </Switch>
            </main>
          </Router>

          <BackgroundCanvas />
        </StyleContextProvider>
      </PoemContextProvider>
    </div>
  );
};

export default App;
