import React from 'react';
import { preProcessFile } from 'typescript';
import { FilterValuesType } from './App';
import { TaskType } from './Todolist';
type DeleteButtonType ={
    name: FilterValuesType
    callBack:()=>void
}

export const DeleteButton = (props: DeleteButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }
       return(
        <button onClick={onClickHandler}>{props.name}</button>
       )
   
}