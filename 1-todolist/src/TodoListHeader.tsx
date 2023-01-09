import React from 'react';
 type TodoListHeader={
    title: string
 }

export const TodoListHeader = (props: TodoListHeader) =>{
    return(
        <h3>{props.title}</h3>
    )
}