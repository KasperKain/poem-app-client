import EditPoem from './EditPoem';
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Route path='poems/1'>
        <EditPoem />
      </Route>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
