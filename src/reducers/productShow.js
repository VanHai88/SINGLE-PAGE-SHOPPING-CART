import * as types from "../constants/ActionTypes"

var initialState = {
    loading: true,
    products: [],
    error: ""
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_STARTED:
            return {
                loading: true,
                products: []
            }
        case types.GET_PRODUCTS_SUCCES:
            return {
                loading: false,
                products: action.products
            }
        case types.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                products: [],
                error: "Bạn Không load được dữ liệu!!"
            }
        case types.SORT_PRICE:
            return{
                products: action.products
            }
        default:
            return state
    }
}

export default myReducer

