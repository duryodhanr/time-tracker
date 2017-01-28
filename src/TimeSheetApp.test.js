import React from 'react';
import ReactDOM from 'react-dom';
import TimeSheetApp from './TimeSheetApp.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeSheetApp />, div);
});
