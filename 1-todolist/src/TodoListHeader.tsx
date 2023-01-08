import { prependOnceListener } from "process"
import { isPropertySignature } from "typescript"

type TodoListHeader = {
    title:string
}

export const TodoListHeader = (props: TodoListHeader)=>{
    return (
        <h1>{props.title}</h1>
    )
    }