import {combineReducers} from "redux"
import productGetSize from "./productGetSize"
import productSearchSize from "./productSearchSize"
import productShow from "./productShow"
import productCart from "./productCart"

const myReducer = combineReducers({
    productGetSize,
    productSearchSize,
    productShow,
    productCart
})

export default myReducer