import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { AppContextOne } from './Context';
import { TodoApp } from './components/exampleHooks/v1'
const OtherCom = lazy(() => import('./components/otherComponent'))


class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>} >
        <OtherCom></OtherCom>
        <AppContextOne />
        <TodoApp />
      </Suspense>
    );
  }
}

export default App;
