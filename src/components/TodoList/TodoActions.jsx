import React from 'react'

const TodoActions = ({clearDone, handleCheckAll}) => {
  return (
    <>
        <button onClick={clearDone}>Clear done</button>
        <button onClick={() => handleCheckAll(true)}>Check all</button>
        <button onClick={() => handleCheckAll(false)}>Uncheck all</button>
    </>
    )
}

export default TodoActions
