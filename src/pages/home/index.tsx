import React, { FC } from "react";
import { useHistory } from 'react-router-dom';
import TodoList from "../../components/todo-list";
import '../../react-mini-router'
import './index.less';

const Home: FC = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/dnd-demo');
    }

    return (
        <div className="home">
            <h1>TDD & BDD</h1>
            <TodoList/>
            <button onClick={handleClick}>跳转dnd</button>
        </div>
    )
}

export default Home