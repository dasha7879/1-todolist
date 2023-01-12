import React, { useState } from 'react';
import { preProcessFile } from 'typescript';
import { FilterValuesType } from './App';
type ButtonType ={
    name: FilterValuesType
    callBack:(value: FilterValuesType)=>void
}

export const Button = (props: ButtonType) => {

    const onClickHandler=(value: FilterValuesType)=>{
        props.callBack(props.name)
    }
       return(
        <button onClick={()=>onClickHandler(props.name)}>{props.name}</button>
       )
   
}