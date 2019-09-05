import React from 'react';
import ReactDOM from 'react-dom';
import Colorhunt from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Colorhunt />, div);
  ReactDOM.unmountComponentAtNode(div);
});
