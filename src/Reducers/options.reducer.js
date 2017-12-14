import {ADD_OPTION, REMOVE_ALL, REMOVE_OPTION} from '../Actions/types'

const initialState = localStorage.getItem('options') ? JSON.parse(localStorage.getItem('options'))  :  [];


function optionsReducer(state = initialState, action){
    switch(action.type){
        case ADD_OPTION: {
            return [...state, action.option];
        }
        case REMOVE_ALL:{
            return state.filter(()=>{
                return false
            })
        }
        case REMOVE_OPTION:{
            const newState = [...state];
            newState.splice(newState.indexOf(newState[action.index]), 1);
            return newState
        }
    }
    return state;
}

export default optionsReducer;