import React from 'react';
import { AddTaskForm } from './AddTaskForm';
import './App.css';
import TodoList, { TaskType } from "./TodoList";
import { TodoListHeader } from './TodoListHeader';


function App() {
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to buy"
    const tasks_1: Array<TaskType> = [
        { id: 1, title: "HTML", isDone: true },
        { id: 2, title: "CSS", isDone: true },
        { id: 3, title: "JS/TS", isDone: false },
        { id: 1, title: "HTML", isDone: true },
        { id: 2, title: "CSS", isDone: true },
        { id: 3, title: "JS/TS", isDone: false }
    ]
    const tasks_2: Array<TaskType> = [
        { id: 1, title: "Cheese", isDone: true },
        { id: 2, title: "Milk", isDone: true },
        { id: 3, title: "Carrot", isDone: false },
        { id: 1, title: "Onion", isDone: true }
    ]

    return (
        <>
           <TodoList  title={todoListTitle_1} tasks={tasks_1}/>
        </>
    );
}

export default App;
