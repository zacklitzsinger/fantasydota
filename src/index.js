import React from 'react';
import ReactDOM from 'react-dom';

import {Route, BrowserRouter} from 'react-router-dom';

import App from './App';

if (document.getElementById('root') === null){
    document.write('<div id="root"></div>');
}

ReactDOM.render(
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>,
    document.getElementById('root')
);
