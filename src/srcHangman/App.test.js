import React from 'react';
import ReactDOM from 'react-dom';
import Hangman from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hangman />, div);
  ReactDOM.unmountComponentAtNode(div);
});
