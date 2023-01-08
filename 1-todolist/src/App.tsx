import React from 'react';
import './App.css';
import { TaskType, TodoList } from './TodoList';

function App() {
    const todoListTitle_1:string = "What to learn"
    const todoListTitle_2:string= "What to buy"
    const tasks_1: Array<TaskType> = [
        {id:1, title:"html", isDone:true},
        {id:2, title:"css", isDone:true},
        {id:3, title:"js", isDone:false}
    ]

    return (
        <div className="App">
            <TodoList title = {todoListTitle_1} tasks = {tasks_1}/>
            {/* <TodoList title = {todoListTitle_2} tasks = {tasks_1} /> */}
        </div>
    );
}

export default App;
