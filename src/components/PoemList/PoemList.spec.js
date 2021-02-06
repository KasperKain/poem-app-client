import PoemList from './PoemList';
import React from 'react';
import ReactDOM from 'react-dom';
import { StyleContext } from '../../context/styleContext';
import { PoemContext } from '../../context/poemContext';
import { PoemDetailsContext } from '../../context/poemDetailsContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StyleContext.Provider value={{ styles: [] }}>
      <PoemContext.Provider value={{ poems: [] }}>
        <PoemDetailsContext.Provider value={{ expanded: false }}>
          <PoemList />
        </PoemDetailsContext.Provider>
      </PoemContext.Provider>
    </StyleContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
