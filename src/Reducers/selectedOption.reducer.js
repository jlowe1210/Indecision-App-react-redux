import { RANDOM_OPTION } from "../Actions/types";

function selectedOption(state = null, action){
    if(action.type === RANDOM_OPTION){
        console.log(action.randomoption)
        return state = action.randomoption
    }
    return state;
}

export default selectedOption;