import * as types from "../constants/ActionTypes"

var data = JSON.parse(localStorage.getItem('todos'))
var initialState = data? data:[];

var myReducer = (state = initialState, action) => {
    var itemIdex
    switch (action.type) {
        case types.GET_CARTS_STARTED:
            return [...state];
        case types.GET_CARTS_SUCCES:
            return [...action.carts]
        case types.ADD_CART_SUCCES:
            state.push(action.product)
            localStorage.setItem("todos",JSON.stringify(state))
            return [...state]
        case types.EDIT_CART:
            itemIdex = state.findIndex(value => value.id === action.product.id);
            state[itemIdex] = action.product
            localStorage.setItem("todos",JSON.stringify(state))
            return [...state]
        case types.DELETE_CART_SUCCES:
            itemIdex = state.findIndex(value => value.id === action.id);
            state.splice(itemIdex, 1);
            localStorage.setItem("todos",JSON.stringify(state))
            return [...state]
        default:
            return state
    }
}

export default myReducer

