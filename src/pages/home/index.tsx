import React, { FC } from "react";
import TodoList from "../../components/todo-list";

import './index.less';

const Home: FC = () => {

    return (
        <div className="home">
            <h1>TDD & BDD</h1>
            <TodoList/>
        </div>
    )
}

export default Home