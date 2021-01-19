import { combineReducers } from "redux";
import { SET_NAME } from "./basic.action";

const basicReducersState = {
    name: 'Origin State'
}

function basicReducer(state = basicReducersState, action: {type:string, name:string}){
    switch (action.type){
        case SET_NAME:
            return {...state, name: action.name}
        default:
            return {...state};
    }
}

const basicReducers = combineReducers({basicReducer})

export default basicReducers;