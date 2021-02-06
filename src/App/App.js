import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Poems from '../routes/Poems';
import Creator from '../routes/Creator';
import Header from '../components/Header/Header';
import { PoemContextProvider } from '../context/poemContext';
import { StyleContextProvider } from '../context/styleContext';
import BackgroundCanvas from '../BackgroundCanvas/BackgroundCanvas';
import './App.css';
import { PoemDetailsContextProvider } from '../context/poemDetailsContext';

const App = () => {
  return (
    <div className='App'>
      <PoemDetailsContextProvider>
        <PoemContextProvider>
          <StyleContextProvider>
            <Router>
              <Header />
              <main>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/poems' component={Poems} />
                  <Route exact path='/poems/create' component={Creator} />
                  <Route exact path='/poems/edit/:id' component={Creator} />
                </Switch>
              </main>
              <BackgroundCanvas />
            </Router>
          </StyleContextProvider>
        </PoemContextProvider>
      </PoemDetailsContextProvider>
    </div>
  );
};

export default App;
