import React from 'react';
import { isPropertySignature } from 'typescript';
export type DataType = {
    title?: string
    tasks?: TasksType[]
    students: Array<string>
}
type TasksType = {
    taskId?: number
    title: string
    isDone: boolean
}

export const Tasks = (props: DataType) => {
    let { students } = props
    return (
        <div>
            {students.map((student) => {
                return <div>
                    {student}
                </div>
            })}
        </div>
    )
}