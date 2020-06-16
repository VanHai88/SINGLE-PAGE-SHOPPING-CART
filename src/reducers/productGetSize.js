import * as types from "../constants/ActionTypes"

var initialState = [];

var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.GET_SIZE:
            return [...action.sizes]
        default: 
            return state
    }
}

export default myReducer

