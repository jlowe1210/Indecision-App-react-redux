import {combineReducers} from 'redux';
import optionsReducer from './options.reducer';
import selectedReducer from './selectedOption.reducer';


const rootReducer = combineReducers({
    options: optionsReducer,
    selectedOption: selectedReducer
})

export default rootReducer;