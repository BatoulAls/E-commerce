
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import ProductDetails from './Pages/ProductDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header'
import Cart from './Component/Cart'
import RelatedProducts from './Component/RelatedProducts'
import {CartProvider} from './Component/CartContext'
import CheckOut from './Pages/CheckOut'
function App() {
  

  return (
    <>
   <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/:id" element={<RelatedProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut/>}/>
        </Routes>
      </Router>
    </CartProvider>
  </>
  
  )
}

export default App
