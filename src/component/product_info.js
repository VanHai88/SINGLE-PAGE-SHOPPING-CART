import React from 'react';
import * as actions from "../actions/index"
import {connect} from "react-redux"

class ProductInfo extends React.Component {
    onClickAddCart = () =>{
        let{getCarts, product} = this.props;
        let index = getCarts.findIndex(value => value.id === product.id)
        if(index === -1){
            this.props.addCart(product)
        }else{
            getCarts[index].count = getCarts[index].count+1;
            this.props.editCart(getCarts[index])
        }
        
    }
    render() {
        var {transportation, img, name, price, discount} = this.props.product;
        return (
            <div className="product_info">
                <span className="tagShip">{transportation}</span>
                <img src={img} alt="img" />
                <div className="content_infor">
                    <h4>{name}</h4>
                    <span className="line"></span>
                    <div className="price">
                        <p><span>$</span> {price}</p>
                        <p><span>or</span> {discount[0]} <span>X</span> $ {discount[1]}</p>
                    </div>
                </div>
                <button onClick={()=>this.onClickAddCart()}>Add to cart</button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        getCarts : state.productCart
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addCart: (id)=>{
            dispatch(actions.addCart(id))
        },
        editCart: (id)=>{
            dispatch(actions.editCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);