
import React from 'react';
import {useReduxState} from 'react-redux-human-hooks';

function MyComponent() {
  const {name,quote,animal} = useReduxState(
      state=>state
  )
  return (
    <div style={{backgroundColor:'#F1F1F1',display:'flex',flexDirection:'column'}}>
        <h3>Name: {name}</h3>
        <h2>Likes: {animal}</h2>
        <h2>Favorite quote: {quote}</h2>
    </div>
  );
}

export default MyComponent;
