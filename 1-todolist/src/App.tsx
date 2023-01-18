import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { FilterValuesType, TaskType, TodoList } from './TodoList';

function App() {
    const todoListTitle_1: string = "What to learn"
    const [tasks, setTasks] = useState<Array<TaskType>>([
        { id: v1(), title: "html", isDone: true },
        { id: v1(), title: "css", isDone: true },
        { id: v1(), title: "js", isDone: false }
    ])
    // const todoListTitle_2:string= "What to buy"
    // const tasks_2: Array<TaskType> = [
    //     {id:1, title:"Eggs", isDone:true},
    //     {id:2, title:"Milk", isDone:true},
    //     {id:3, title:"Cheese", isDone:false}
    // ]

    

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    

    const [filter, setFilter] = useState<FilterValuesType>('all')
    
    const changeFilter = (filter: FilterValuesType) => setFilter(filter)

    const addTask = (title:string)=>{
        const newTask: TaskType ={
            id: v1(),
            title:title,
            isDone:false
        }
        
        setTasks([ newTask,...tasks])
    }

    const getFilteredTasksForRender =

        (tasks: TaskType[], filter: FilterValuesType): TaskType[] => {

            switch (filter) {
                case "active":
                    return tasks.filter(task => task.isDone === false)
                case "complited":
                    return tasks.filter(task => task.isDone === true)
                default: return tasks
            }
        }
    
    const filteredTasksForRender = getFilteredTasksForRender(tasks, filter)

    return (
        <div className="App">
            <TodoList
                title={todoListTitle_1}
                tasks={filteredTasksForRender}
                removeTask={removeTask}
                changeFilter = {changeFilter}
                addTask = {addTask}
            />
            {/* <TodoList title = {todoListTitle_2} tasks = {tasks_2} /> */}
        </div>
    );
}

export default App;
