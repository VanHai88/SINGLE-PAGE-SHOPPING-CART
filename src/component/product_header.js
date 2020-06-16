import React from 'react';

class ProductHeader extends React.Component {
    onTheHome = () =>{
        document.getElementById("container").style.display = 'flex';
        document.getElementById("product_bill").style.display = 'none';
    }
    render() {
        return (
            <div className="logo">
                <img src="./images/logo.png" alt="logo" onClick={this.onTheHome}></img>
            </div>
        )
    }
}

export default ProductHeader