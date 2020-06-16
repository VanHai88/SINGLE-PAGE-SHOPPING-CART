import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux"

class Productbill extends React.Component {

    onPlaceOder = () =>{
        document.getElementById("product_bill").style.display = 'none';
        document.getElementById("container").style.opacity = '1';
    }
    render() {
        var product = this.props.listCart.map((value, index)=>{
            return typeof value === 'object' ? <div key={index} className="bill-item">
            <div className="bill_delivery">
                <p>chosse your delivery option</p>
                <div className="delivery_standard">
                    <i className="fas fa-check-circle"></i>
                    <div className="delivery_info">
                        <p>$ 17,600</p>
                        <p>Standard Delivery</p>
                        <p>Est. Arrival: 22-28 May</p>
                    </div>
                </div>
            </div>
            <div className="bill_product">
                <div className="item_product">
                    <img src={value.img} alt="product" />
                    <div className="product_description">
                        <p>{value.name}</p>
                        <p>Unknown, Color Family:White, Size:Int:L</p>
                    </div>
                </div>
                <div className="product_price">
                    <p>$ {value.price}</p>
                    <p>$ 70,000</p>
                    <p>-49%</p>
                    <i className="far fa-trash-alt"></i>
                </div>
                <div className="product_quantity">
                <p>Qty: {value.count}</p>
            </div>
            </div>
        </div>:false
         })
        return ReactDOM.createPortal(
            <>
            <div className="product_bill" id="product_bill">
                <div className="bill_list">
                    <div className="bill_title">
                        <p>5 ITEMS</p>
                        <p>PRICE</p>
                        <p>QUANTITY</p>
                    </div>
                    <div className="list_product">
                        {product}
                    </div>
                </div>
                <div className="shipping_dilling">
                    <button>PROCEED TO PAYMENT</button>
                    <div className="info_shipping">
                        <h4>Shipping &#38; Billing</h4>
                        <div className="info_item">
                            <i className="fas fa-map-marker-alt"></i>
                            <p><span>Nguyễn Văn Hải</span><br/><span>OFFICE</span> 469 Tôn Đức Thắng - Phường Hòa Khánh Nam - Quận Liên Chiểu
                                - Thành Phố Đà Nẵng</p>
                            <p className="edit_info">Edit</p>
                        </div>
                        <div className="info_item">
                            <p><i className="fas fa-file-invoice-dollar"></i> Bill to the same address</p>
                            <p className="edit_info">Edit</p>
                        </div>
                        <div className="info_item">
                            <p><i className="fas fa-phone"></i> 0973741903</p>
                            <p className="edit_info">Edit</p>
                        </div>
                        <div className="info_item">
                            <p><i className="fas fa-envelope"></i> vanhai81@yahoo.com.vn</p>
                            <p className="edit_info">Edit</p>
                        </div>
                    </div>

                    <div className="order_summary">
                        <h4>Order Summary</h4>
                        <div className="summary_item">
                            <p>Subtotal (4 Items)</p>
                            <p>$ 367,880</p>
                        </div>
                        <div className="summary_item">
                            <p>Shipping Fee</p>
                            <p>$ 70,400</p>
                        </div>
                    </div>

                    <div className="voucher">
                        <input type="text" placeholder="Enter Voucher Code"></input>
                        <button>APPLY</button>
                    </div>
                    <div className="total_bill">
                        <div className="total">
                            <p>Total:</p>
                            <p>$ 438,280</p>
                        </div>
                        <p className="vat">VAT included, where applicable</p>
                    </div>

                    <button onClick={this.onPlaceOder}>Place Order</button>
                </div>
            </div>
           </>,
            document.getElementById('bill')
        )
    }
}

const mapStateToProps = state =>{
    return{
        listCart: state.productCart
    }
}

export default connect(mapStateToProps)(Productbill);