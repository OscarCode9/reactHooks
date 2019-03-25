import React, {  useReducer }  from 'react';
import { appReducer } from './reducer';

export  const TodoApp = () => {
  const [ state, dispatch ] = useReducer(appReducer, []);

  function newTodo (){
    return dispatch({
      type: 'ADD'
    })
  }

  return(
    <div>
      <h1> My todo app</h1>
      <button onClick={newTodo} > New todo</button>
      {
        state.map(x =>(
          <div key={x.id} >
            {x.id}
          </div>
        ))
      }
    </div>
  )
}