import React, { StrictMode }  from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import ReactDOM from 'react-dom';
import Home from './pages/home'

ReactDOM.render(
    <StrictMode>
       <Home/>
    </StrictMode>,
    document.getElementById('root')
);

configure({ adapter: new Adapter() });