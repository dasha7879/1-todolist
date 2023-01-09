import React from 'react';
import './App.css';
import { TaskType } from './TasksList';
import { TodoList } from './TodoList';

function App() {
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to buy"
    const tasks_1: Array<TaskType> = [
        { id: 1, title: "html", isDone: true },
        { id: 2, title: "css", isDone: true },
        { id: 3, title: "js", isDone: false }]


    const tasks_2: Array<TaskType> = [
        { id: 1, title: "Eggs", isDone: true },
        { id: 2, title: "Milk", isDone: true },
        { id: 3, title: "Cheese", isDone: false }
    ]


    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1} />
            <TodoList title={todoListTitle_2} tasks={tasks_2} />
        </div>
    );
}

export default App;
