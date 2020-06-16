import React from 'react';
import './App.css';
import ProductSize from './component/product_size'
import ProductShow from './component/product_show'
import ProductCart from './component/product_cart'
import ProductPill from './component/product_pill'

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container" id="container">
          <ProductSize />
          <ProductShow />
          <ProductCart />
        </div>
        <ProductPill />
      </>
    )
  }
}

export default App;
