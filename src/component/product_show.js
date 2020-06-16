import React from 'react';
import ProductInfo from './product_info'
import { connect } from "react-redux"
import * as actions from "../actions/index"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ProductShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    componentWillMount() {
        this.props.getProducts();
    }

    sortPrice = async (e) => {
        var target = e.target;
        await this.setState({
            value: target.value
        })
        this.props.sortProduct(this.state.value)
    }
    render() {
        var {productSearchSize, productsShow } = this.props;
        var products =productsShow.products;
        if(productSearchSize !== 0){
            products = products.filter(value => value.size === productSearchSize);
        }

        if(productsShow.error !== "") toast.error(productsShow.error)

        var product = products.map((value, index) => {
            return <ProductInfo onClickAddCart={this.props.onClickAddCart} key={index} product={value} />
        })
        return (
            <>
                <ToastContainer />
                <div className="product_show">
                    <div className="header_product">
                        <p>{products.length} Product(s) found</p>
                        <div>
                            <label>Order by </label>
                            <select
                                onChange={this.sortPrice}
                                value={this.state.value}
                            >
                                <option
                                    value={""}
                                >Select</option>
                                <option
                                    value={"asc"}
                                >Lowest to highest</option>
                                <option
                                    value={"desc"}
                                >Highest to lowest</option>
                            </select>
                        </div>
                    </div>
                    <div className="block_product">
                        {product}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        productsShow: state.productShow,
        productSearchSize: state.productSearchSize
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => {
            dispatch(actions.getProducts())
        },
        sortProduct: (value) => {
            dispatch(actions.sortPrice(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)