import React, { FC, useState, useCallback } from "react";
import TodoList from "../../components/todo-list";
// import Draggable from "../../components/dragable";
import { useDrop, useDrag } from 'react-dnd'
import './index.less';

export interface DragItem {
    id: string
    type: string
    right: number
    bottom: number
}

interface BoxMap {
    bottom: number; right: number; title: string
}

const Home: FC = () => {

    const [boxes, setBoxes] = useState<BoxMap>({bottom: 20, right: 80, title: 'Drag me around'})

    const moveBox = useCallback(
        (right: number, bottom: number) => {
            setBoxes(boxes => ({...boxes, right, bottom }))
        },
        [],
    )

    const [, drop] = useDrop({
        accept: 'box',
        drop(item: DragItem, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset() as {
                x: number
                y: number
            }

            let right = Math.round(item.right - delta.x)
            let bottom = Math.round(item.bottom - delta.y)
            console.log(right, bottom)
            moveBox(right, bottom)
            return undefined
        },
    })

    const [{ isDragging }, drag] = useDrag({
        item: { right: boxes.right, bottom: boxes.bottom, type: 'box' },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    //
    // if (isDragging) {
    //     return <div ref={drag} />
    // }


    return (
            <div className="home" ref={drop}>
                <h1>TDD & BDD</h1>
                <TodoList/>
                {
                    !isDragging &&  <button ref={drag} style={{position: 'absolute', ...boxes}}>测试</button>
                }
            </div>
    )
}

export default Home