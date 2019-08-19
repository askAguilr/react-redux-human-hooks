
import React from 'react';
import {useReduxState,useBindActionCreators} from 'react-redux-human-hooks';
import * as actions from './actions';

function MyComponent() {
  const {setDog,setAnimal,setSquanch} = useBindActionCreators(actions);
  const {animal} = useReduxState(
      state=>state
  )

  return (
    <div style={{backgroundColor:'#F1F1F1',display:'flex',flexDirection:'column'}}>
        <h3>Animal: {animal}</h3>
        <div>
            <button onClick={()=>setDog()}>Set Dog</button>
            <button onClick={()=>setAnimal(Math.random()>0.5?'Cat':'Moose')}>Set Random</button>
            <button onClick={()=>setSquanch()}>Set Squanch</button>
        </div>
    </div>
  );
}

export default MyComponent;
