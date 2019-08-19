import React from 'react';
//We provide the necessary modules, you can also import them from redux and react-redux
import {Provider,createStore} from 'react-redux-human-hooks';
import MyComponent from './MyComponent';

//Create the store, in this case we are using teh Redux Devtools middleware
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    //Note we are wrapping the entire app using Provider
    <Provider store={store}> 
      <div className="App">
        <header className="App-header">
          <h1>
            React Redux Human Hooks Example
          </h1>
        </header>
        <MyComponent/>
      </div>
    </Provider>
  );
}

export default App;
