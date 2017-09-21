import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

if (document.getElementById('root') === null){
    document.write('<div id="root"></div>');
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
