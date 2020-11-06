import React  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import store from './store';
import routes from './router';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            { renderRoutes(routes) }
        </BrowserRouter>
    </Provider>
   ,
    document.getElementById('root')
);