import React, {useEffect} from 'react';

import { ContextOne, ContextOneConsumer  } from './ContextOne';

export function AppContextOne(){
 let {
   state, dispatch
 } = React.useContext(ContextOne)  

 useEffect(() => {
   document.body.style.backgroundColor = state.currentColor;
 }, [ state.currentColor ])

 const dec = () => dispatch({ type: 'decrement' });
 const reset = () => dispatch({ type: 'reset'});
 const setColor = color => () => dispatch({ type: 'set-color', payload: color })

 return (
  <ContextOneConsumer >
    {
      (context => {
        console.log(context)
        return (
          <React.Fragment>
          <div style={{ textAlign: "center" }}>
            <p>
              Current color is: <b>{state.currentColor}</b>
            </p>
            <p>
              Current count: <b>{context.state.count}</b>
            </p>
          </div>
          <div style={{ paddingTop: 40 }}>
            <p>Count controls:</p>
            <button onClick={ () => {
              context.dispatch({ type: 'increment'})
            } }>Increment!</button>
            <button onClick={dec}>Decrement!</button>
          </div>
          <div>
            <p>Color controls:</p>
            <button onClick={setColor("green")}>Change to green!</button>
            <button onClick={setColor("papayawhip")}>Change to papayawhip!</button>
          </div>
          <div>
            <p>Reset changes:</p>
            <button onClick={reset}>Reset!</button>
          </div>
        </React.Fragment>
        )
      })
    }
   
  </ContextOneConsumer>
  
);



}