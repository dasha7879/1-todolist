//мапинг тасок и фильтры

import { prependOnceListener } from "process"
import { TaskType } from "./TodoList"


type TasksListType = {
    tasks: TaskType[]
}
 export const TasksList = (props: TasksListType) => {

    let tasksList = props.tasks.length
        ? props.tasks.map((task: TaskType) => {
            return (
                <li>
                    <input type="checkbox" checked={task.isDone} />
                    <span>{task.title}</span>
                </li> 
            )
        })
        : <span>Your taskslist is empty</span>



    return (
        <>

            <ul>
                {tasksList}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
        
            </div>

        </>
    )
}
