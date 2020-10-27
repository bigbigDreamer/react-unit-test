import React, { FC } from "react";
import TodoList from "../../components/todo-list";
import DndDemo from "../../components/dnd-demo";
import './index.less';


const Home: FC = () => {

    return (
        <div className="home">
            <h1>TDD & BDD</h1>
            <TodoList/>
            <DndDemo/>
        </div>
    )
}

export default Home