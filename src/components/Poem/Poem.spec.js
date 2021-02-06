import Poem from './Poem';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Poem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
