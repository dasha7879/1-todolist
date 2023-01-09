import { title } from 'process';
import React from 'react';
import { AddTaskFrom } from './AddTaskForm';
import { Button } from './Button';
import { TasksList, TaskType } from './TasksList';
import { TodoListHeader } from './TodoListHeader';

 export type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}



export const TodoList = (props: TodoListPropsType) => {

    
    
        return (
        <>
            <div>
                <TodoListHeader title = {props.title}/>
                <AddTaskFrom />
                <TasksList tasks = {props.tasks}/>
                <Button  buttonName='All' callBack={} />
                <Button  buttonName='Active'callBack={} />
                <Button  buttonName='Copmlited' callBack={}/>
            </div>
        </>
    )
}