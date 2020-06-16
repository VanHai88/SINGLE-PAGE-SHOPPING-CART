import * as types from "../constants/ActionTypes"
import * as urls from "../constants/UrlTypes"
import axios from 'axios';

export const getSize = () =>{
    return dispatch => {
        axios.get(urls.PORT_SIZE)
        .then(res =>{
            dispatch({
                type: types.GET_SIZE,
                sizes: res.data
            })
        })
       
    }
}

export const searchSize = (size) =>{
    return{
        type: types.SEARCH_SIZE,
        size
    }
}

export const getProducts = ()=>{
    return dispatch =>{
        dispatch(getProductsStarted());
        axios.get(urls.PORT_PRODUCT)
        .then(res => {
            dispatch(getProductsSusses(res.data));
        })
        .catch(err=>{
            dispatch(getProductsFail(err))
        })
        
    }
}

export function getProductsStarted(){
    return {
        type: types.GET_PRODUCTS_STARTED
    }
  }
  
  export function getProductsFail(err){
    return {
        type: types.GET_PRODUCTS_FAIL,
        err
    }
  }

  export function getProductsSusses(products){
    return {
        type: types.GET_PRODUCTS_SUCCES,
        products
    }
  };

  export const getCarts = ()=>{
    return dispatch =>{
        dispatch(getCartsStarted());
        axios.get(urls.PORT_CART)
        .then(res => {
            dispatch(getCartsSusses(res.data));
        })
        .catch(err=>{
            dispatch(getCartsFail(err))
        })
        
    }
}

export function getCartsStarted(){
    return {
        type: types.GET_CARTS_STARTED
    }
  }
  
  export function getCartsFail(err){
    return {
        type: types.GET_CARTS_FAIL,
        err
    }
  }

  export function getCartsSusses(carts){
    return {
        type: types.GET_CARTS_SUCCES,
        carts
    }
  };

  export const addCart = (product)=>{
    return dispatch =>{
        dispatch(addCartStarted());
        axios.post(urls.PORT_CART,product)
        .then(res => {
            dispatch(addCartSusses(res.data));
        })
        .catch(err=>{
            dispatch(addCartFail(err))
        })
        
    }
}

export function addCartStarted(){
    return {
        type: types.ADD_CART_STARTED
        
    }
  }
  
  export function addCartFail(err){
    return {
        type: types.ADD_CART_FAIL,
        err
    }
  }

  export function addCartSusses(product){
    return {
        type: types.ADD_CART_SUCCES,
        product
    }
  };

  export function editCart(product){
    axios.put(urls.PORT_CART+product.id,product)
    return {
        type: types.EDIT_CART,
        product
    }
  };

  export const deleteCart = (id)=>{
      console.log(id)
    return dispatch =>{
        dispatch(deleteCartStarted());
        axios.delete(urls.PORT_CART+id)
        .then(res => {
            dispatch(deleteCartSusses(id));
        })
        .catch(err=>{
            dispatch(deleteCartFail(err))
        })
        
    }
}

export function deleteCartStarted(){
    console.log("a")
    return {
        type: types.DELETE_CART_STARTED
    }
  }
  
  export function deleteCartFail(err){
      console.log("b")
    return {
        type: types.DELETE_CART_FAIL,
        err
    }
  }

  export function deleteCartSusses(id){
    return {
        type: types.DELETE_CART_SUCCES,
        id
    }
  };

export const sortPrice = (value)=>{
    return dispatch=>{
        axios.get(urls.SORT_PRICE+value)
        .then(res=>{
            dispatch(sortPriceSusses(res.data))
        })
    }
    
}

export function sortPriceSusses(products){
    return{
        type: types.SORT_PRICE,
        products: products
    }
  };