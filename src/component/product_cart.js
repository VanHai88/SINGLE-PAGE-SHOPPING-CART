import React from 'react';
import {connect} from "react-redux"
import * as actions from "../actions/index"

class ProductCart extends React.Component {

    componentWillMount(){
        this.props.getCarts();
    }

    clickCart = () =>{
        document.getElementById("block_list_cart").style.display = 'block';
     }
 
     cancelProductCart = () =>{
         document.getElementById("block_list_cart").style.display = 'none';
     }

     onClearProduct = (id) =>{
        this.props.onDeleteProductCart(id);
     }

     checkOut = () =>{
        document.getElementById("product_bill").style.display = 'flex';
        document.getElementById("container").style.opacity = '.2';
        document.getElementById("block_list_cart").style.display = 'none';
     }
     
    render() {
        var {listCart} = this.props;
        var productAddCart = listCart.map((value, index)=>{
            return <div key={index} className="cart_info">
                        <img src={value.img} alt="img" />
                        <div className="cart_content">
                            <h4>{value.name}</h4>
                            <p><span>S</span> Black with custom print</p>
                            <p>Quantity: {value.count}</p>
                        </div>
                        <p className="cart_price">$ {value.price}</p>
                        <img src="./images/icon.png" className="clear" alt="img" onClick={()=>this.onClearProduct(value.id)} />
                    </div>
         })

         var totalCart = 0;
         for(let i = 0; i < listCart.length; i++){
             totalCart += listCart[i].price * listCart[i].count;
         }

        return (
            <div className="product_cart">
                    <div className="show_list_cart">
                        <img src="./images/cart.png" alt="cart" onClick={this.clickCart}></img>
                        <span className="count_cart">{this.props.listCart.length}</span>
                    </div>
                    <div id="block_list_cart">
                        <div className="cancel">
                            <img src="./images/icon.png" alt="canel" onClick={this.cancelProductCart}/>
                        </div>
                        <div className="list_cart">
                            <div className="icon_cart">
                                <img src="./images/cart.png" alt="cart"></img>
                                <span>Bag</span>
                                <span className="count_cart">{this.props.listCart.length}</span>
                            </div>
                            {productAddCart}
                        </div>
                        <div className="checkout">
                            <div className="subtotal">
                                <p>SUBTOTAL</p>
                                <div className="subtotal_price">
                                    <p className="price_cart">${parseFloat(totalCart).toFixed(2)}</p>
                                    <p>OR UP TO 9 x $ 4.48</p>
                                </div>
                            </div>
                            <button onClick={this.checkOut}>CHECK OUT</button>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        listCart: state.productCart
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        getCarts: ()=>{
            dispatch(actions.getCarts())
        },
        onDeleteProductCart: (id)=>{
            dispatch(actions.deleteCart(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductCart);