import {ADD_OPTION, REMOVE_ALL, REMOVE_OPTION, RANDOM_OPTION} from './types'

export function addOption (option){
    return {
        type: ADD_OPTION,
        option: option
    }
}
export function removeAll(){
    return {
        type: REMOVE_ALL
    }
}
export function remove(index){
    return {
        type: REMOVE_OPTION,
        index
    }
}
export function randomSelect(randomoption){
    return {
        type: RANDOM_OPTION,
        randomoption
    }
}

