import React  from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

ReactDOM.render( <DndProvider backend={HTML5Backend}><Home/></DndProvider>,
    document.getElementById('root')
);