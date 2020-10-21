import React, { Dispatch, FC, useCallback, useRef, KeyboardEvent } from 'react';
import { ActionShape } from "../interface";

interface OperatePanelProps {
    readonly dispatch: Dispatch<ActionShape>
}

const OperatePanel: FC<OperatePanelProps> = ({ dispatch }) => {

    const inputRef = useRef<any>(null);

    const handleOnKeyUp = useCallback((event: KeyboardEvent<HTMLInputElement> ): void => {
        if(event.key !== 'Enter') { return; }
        dispatch({type: 'add-todo', payload: inputRef.current})
    }, [dispatch]);

    return (
        <div className="operate-panel">
            <input type="text" placeholder="请输入" onKeyUp={handleOnKeyUp} onInput={(e) => inputRef.current = (e.target as HTMLInputElement).value}/>
            <button>增加</button>
        </div>
    );
};

export default OperatePanel;