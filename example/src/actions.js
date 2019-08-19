import {createAction,createActions} from 'react-redux-human-hooks';

//Define action types here
export const { setAnimal, otherAction}
 = createActions('SET_ANIMAL','OTHER_ACTION')

 //You can specify them one by one
export const setDog = createAction('SET_DOG');

//Or you can write your own actions creators
export const setSquanch = createAction('SET_SQUANCH',payload=>{
    //do something
    return 'Squanchy'
});


