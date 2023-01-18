import React, { ChangeEvent, useState, KeyboardEvent } from 'react';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void

}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValuesType = 'all' | 'active' | 'complited'

export const TodoList = (props: TodoListPropsType) => {

    const [title, setTitle] = useState<string>('')



    let tasksList = props.tasks.length ?
        props.tasks.map((task: TaskType) => {

            const removeTask = () => props.removeTask(task.id)
            return (
                <li>
                    <input
                        type="checkbox" checked={task.isDone} />
                    <span>{task.title}</span>
                    <button onClick={removeTask}>x</button>
                </li>
            )
        })
        : <span>Your tasklistis empty</span>

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key == 'Enter') {
            return addTaskHandler()
        }
    }

    const changeFilterAll= ()=>{
        props.changeFilter('all') 
    }
    const changeFilterActive = ()=>{
        props.changeFilter('active')
    }
    const changeFilterCopmlited = ()=>{
        props.changeFilter('complited')
    }

    return (
        <>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input
                        onKeyDown={onKeyPressHandler}
                        onChange={onChangeHandler}
                        value={title}
                    />
                    <button onClick={addTaskHandler}>+</button>
                </div>
                <ul>
                    {tasksList}
                </ul>
                <div>
                    <button onClick={changeFilterAll}>All</button>
                    <button onClick={changeFilterActive}>Active</button>
                    <button onClick={changeFilterCopmlited}>Completed</button>
                </div>
            </div>
        </>
    )
}