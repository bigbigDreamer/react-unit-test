import React, {FC, useReducer} from 'react';
import List from "./list";
import OperatePanel from "./operate-panel";
import { InitShape, ReducerShape } from './interface';

const init: InitShape =  { todolist: [] };

const reducer: ReducerShape = (state, action) => {
    switch (action.type) {
        case 'add-todo':
            return {
                ...state,
                todolist: [...state.todolist, action.payload]
            };
        default:
            return init;
    }
}

const TodoList: FC = () => {

    const [state, dispatch] = useReducer(reducer, init);

    return (
        <div className="todo-list">
            <OperatePanel dispatch={dispatch}/>
            <List list={state.todolist}/>
        </div>
    )
};

export default TodoList;