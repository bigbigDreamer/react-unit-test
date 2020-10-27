import React, {FC, useState} from 'react';
import { useDrop } from 'react-dnd'
import DndTarget from "../dnd-target";

import './index.less';

export interface DragItem {
    id: string
    type: string
    right: number
    bottom: number
}

const DndContainer: FC = () => {

    const [coor, setCoor] = useState({ bottom: 20, right: 10 });

    const [, drop] = useDrop({
        accept: 'box',
        drop(item: DragItem, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset() as {
                x: number
                y: number
            }

            let right = Math.round(item.right - delta.x)
            let bottom = Math.round(item.bottom - delta.y)

            setCoor(state => ({...state, right, bottom }));
            return undefined
        },
    })

    return (
        <div className="dnd-container" ref={drop}>
            <DndTarget coor={coor}/>
        </div>
    )
};

export default DndContainer;