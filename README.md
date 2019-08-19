# React Redux Human Hooks
![David](https://img.shields.io/david/askaguilr/react-redux-human-hooks)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-redux-human-hooks)
![NPM](https://img.shields.io/npm/l/react-redux-human-hooks)

**React hooks for redux that humans can understand**. Integrate redux into your React app one *npm install* away.


# Introduction

The main goal of react-redux-human-hooks is that you can integrate Redux into your app in a simple and fast way, while maintaining performance.

# Install
 **npm:**

    npm i react-redux-human-hooks
    
  **yarn:**

    yarn add react-redux-human-hooks

# Usage

## 1. Create your actions

```javascript
import {createAction,createActions} from  'react-redux-human-hooks';

//Define action types here
export  const { setAnimal, otherAction}
=  createActions('SET_ANIMAL','OTHER_ACTION')

//You can specify them one by one
export  const  setDog  =  createAction('SET_DOG');
  
//Or you can write your own actions creators
export  const  setSquanch  =  createAction('SET_SQUANCH',payload=>{
	//do something
	return  'Squanchy';
});
```
## 2. Create your reducer

```javascript
import {createReducer} from  'react-redux-human-hooks'
import  *  as  actions  from  './actions';

const  reducer  =  createReducer({
	[actions.setAnimal]: (state, action) => ({
		...state,
		animal:  action.payload
	}),
	[actions.setDog]: (state, action) => ({
		...state,
		animal:  'Dog'
	}),
	[actions.setSquanch]: (state, action) => ({
		...state,
		animal:  'Squanchy'
	}),
	},
	//Initial state
	{
		animal:  'Cat',
	}
);

export  default  reducer;
```

## 3. Add Provider to your app

```javascript
import  React  from  'react';

//We provide the necessary modules, you can also import them from redux and react-redux
import {Provider,createStore} from  'react-redux-human-hooks';

import  rootReducer  from  './reducer';
import  MyComponent  from  './MyComponent';

//Create the store, in this case we are using teh Redux Devtools middleware
const  store  =  createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__  &&
window.__REDUX_DEVTOOLS_EXTENSION__());

function  App() {
	return (
		//Note we are wrapping the entire app using Provider
		<Provider  store={store}>
			<div  className="App">
				<header  className="App-header">
					<h1>
						React Redux Human Hooks Example
					</h1>
				</header>
				<MyComponent/>
			</div>
		</Provider>
	);
}

export  default  App;
```

## 4. Use it in your components

```javascript
import  React  from  'react';
import {useReduxState,useBindActionCreators} from  'react-redux-human-hooks';
import  *  as  actions  from  './actions';

function  MyComponent() {
	const {setDog,setAnimal,setSquanch} =  useBindActionCreators(actions);
	const {animal} =  useReduxState(
		state=>state
	)

	return (
		<div  style={{backgroundColor:'#F1F1F1',display:'flex',flexDirection:'column'}}>
			<h3>Animal: {animal}</h3>
			<div>
				<button  onClick={()=>setDog()}>Set Dog</button>
				<button  onClick={()=>setAnimal(Math.random()>0.5?'Cat':'Moose')}>Set Random</button>
				<button  onClick={()=>setSquanch()}>Set Squanch</button>
			</div>
		</div>
	);
}

export  default  MyComponent;
```


