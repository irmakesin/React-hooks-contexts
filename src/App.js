import React from 'react';

import { StateProvider } from './context/index'
import reducer, { initialState } from './reducers'
import WithContext from './components/WithContext';


function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <h3>Posts List coming from reducer</h3>
        <WithContext></WithContext>
      </div>
    </StateProvider>
  );
}

export default App;