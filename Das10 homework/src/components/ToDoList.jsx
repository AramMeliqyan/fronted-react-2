import { useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List"
import { FilterToDo } from "./FilterToDo"

export const ToDoList = () => {

    return <>
        <AddToDo/>
        <FilterToDo/>
        <List/>
    </>
}