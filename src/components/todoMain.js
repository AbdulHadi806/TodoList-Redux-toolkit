import React from 'react'
import Todo from './todo'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../redux/todoSlice'

function TodoMain() {
    const todos = useSelector((state) => state.todos) 
    const dispatch = useDispatch()
    const tododeleteHandler = (item) => {
        dispatch(deleteTodo(item))
    }
    console.log(todos)
  return (
    <div>
      <ul>
        {
            todos.map(item=> {
                return (
                    <Todo tododeleteHandler ={tododeleteHandler} item = {item}/>
                )
            })
        }
      </ul>
    </div>
  )
}

export default TodoMain
