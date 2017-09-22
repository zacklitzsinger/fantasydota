import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from 'store';
import {Route, BrowserRouter} from 'react-router-dom';

import './index.css';
import App from 'components/App';

if (document.getElementById('root') === null){
    document.write('<div id="root"></div>');
}

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route component={App}/>
      </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
