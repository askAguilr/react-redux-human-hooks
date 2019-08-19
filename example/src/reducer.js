import {createReducer} from 'react-redux-human-hooks'
import * as actions from './actions';

const reducer = createReducer(
    {
        [actions.setAnimal]: (state, action) => ({
            ...state,
            animal: action.payload
        }),
        [actions.setDog]: (state, action) => ({
            ...state,
            animal: 'Dogo'
        }),
        [actions.setSquanch]: (state, action) => ({
            ...state,
            animal: action.payload,
            isSquanch:true,
        }),
    },
    //Initial state
    { 
        animal: 'Cat',
        isSquanch: false,
    }
);


export default reducer;