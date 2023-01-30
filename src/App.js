import './App.css';
import Header from './common/header/Header'
import Pages from './pages/Pages'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Data from './components/flashDeals/Data';
import { useState } from 'react';
import Cart from './cart/Cart';
import Sdata from './components/shops/Sdata';
import Pdata from './components/product/Pdata';
import Footer from './common/footer/Footer';
import Shop from './components/shops/Shop'
import Product from './components/product/Product';

function App() {
  // fetch data from database
  const { productItems } = Data
  const { shopItems } = Sdata
  const { pItems } = Pdata

  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(cartItem.map((item) =>
        (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)
      ))
    }
    else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
      console.log('ok if');
    }
    else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
      console.log('ok else');
    }
  }

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path="/pages" exact>
            <Shop shopItems={shopItems} addToCart={addToCart} />
          </Route>
          <Route path="/Apple" exact>
            <Product pItems={pItems} addToCart={addToCart}/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
