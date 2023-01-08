import React, { FC } from 'react';
import { AddTaskForm } from './AddTaskForm';
import { TasksList } from './TasksList';
import { TodoListHeader } from './TodoListHeader';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean

}

const TodoList: FC<TodoListPropsType> = (props) => {
    // let tasksList;
    // if(props.tasks.length === 0){
    //     tasksList = <span> Your tasklist is empty</span>
    // }else{
    //     tasksList = props.tasks.map((task:TaskType) => {
    //         return(
    //             <li>
    //                     <input type="checkbox" checked={task.isDone}/>
    //                     <span>{task.title}</span>
    //             </li>
    //         )
    //     })
    // }


    return (
        <div>
          <TodoListHeader  title='What to learn'/>
          <AddTaskForm />
          <TasksList tasks={props.tasks} />
        </div>
    )
}

export default TodoList;
