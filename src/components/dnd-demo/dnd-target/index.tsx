import React, { FC } from 'react';
import { useDrag } from "react-dnd";
import './index.less';



interface DndTargetProps {
    coor: {
        right: number;
        bottom: number;
    }
}

const DndTarget: FC<DndTargetProps> = ({ coor }) => {

    const [{ isDragging }, drag] = useDrag({
        item: { right: coor.right, bottom: coor.bottom, type: 'box' },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    if(isDragging) { return null }

    return (
        <div className="dnd-target" style={coor} ref={drag}/>
    )
};

export default DndTarget;