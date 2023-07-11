import React from 'react'

function Todo({item, tododeleteHandler}) {
  return (
    <li><span>{item.title}</span> <button onClick={e => {e.preventDefault();tododeleteHandler(item)}}>Delete</button></li>
  )
}

export default Todo
