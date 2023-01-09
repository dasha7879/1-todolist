import React from 'react';

export type TasksListType = {
    tasks: Array<TaskType>
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean

}

export const TasksList = (props: TasksListType) => {
    let tasksList = props.tasks.length ?
        props.tasks.map((task: TaskType) => {
            return (
                <li>
                    <input type="checkbox" checked={task.isDone} />
                    <span>{task.title}</span>
                </li>
            )
        })
        : <span>Your tasklistis empty</span>
    return(
        <ul>{tasksList}</ul>
    )

}