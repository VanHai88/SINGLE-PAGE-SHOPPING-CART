import * as types from "../constants/ActionTypes"

var initialState = 0;

var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.SEARCH_SIZE:
            return action.size;
        default: 
            return state
    }
}

export default myReducer

