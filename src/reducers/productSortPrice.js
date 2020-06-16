import * as types from "../constants/ActionTypes"

var initialState = 0

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_PRICE:
            return state
        default:
            return state
    }
}

export default myReducer

