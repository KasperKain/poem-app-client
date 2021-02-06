import BackgroundCanvas from './BackgroundCanvas';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BackgroundCanvas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
