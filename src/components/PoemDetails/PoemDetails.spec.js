import PoemDetails from './PoemDetails';
import React from 'react';
import ReactDOM from 'react-dom';
import { PoemDetailsContext } from '../../context/poemDetailsContext';
import { PoemContext } from '../../context/poemContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PoemContext.Provider value={[]}>
      <PoemDetailsContext.Provider value={[]}>
        <PoemDetails />
      </PoemDetailsContext.Provider>
    </PoemContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
