import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../redux/todoSlice'

function Form() {
    const [state, setState] = useState("")
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addToDo(state))
    }
    const handleInput = (e) => {
        setState(e.target.value)
    }
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input value={state} type="text" onChange={handleInput}/>
        <button type='submit'>Submit Todo</button>
      </form>
    </div>
  )
}

export default Form
