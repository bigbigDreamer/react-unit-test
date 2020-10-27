import React, { FC } from 'react';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import DndContainer from "./dnd-container";

const DndDemo: FC = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <DndContainer/>
        </DndProvider>
    )
};

export default DndDemo;