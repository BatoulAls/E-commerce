
import  { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import {useCart} from '../Component/CartContext'


const RelatedProducts = ({category}) => {
    
 const[RelatedProdct,setRelatedProdct]=useState([]);

 useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then(response=>{
        setRelatedProdct(response.data.slice(0, 4))

    })
 },[category])

 const {addcart}=useCart()
 const AddToCart=(product)=>{
    addcart(product)
}


  



 return (
    <div>
      <h1 className="fw-bold mb-4">Related products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {RelatedProdct.map((product) => (
          <div key={product.id} className="col mb-3">
            <div className="card border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
                <img src={product.image} className="card-img-top img-fluid rounded-top" alt={product.title} style={{ maxHeight: '150px', objectFit: 'cover' }} />
              </div>
              <div className="text-white bg-primary px-2 py-1 rounded position-absolute" style={{ top: '5px', right: '5px', fontSize: '0.6rem' }}>
                {product.category}
              </div>
              <div className="card-body p-2">
                
              <Link to={`/product/${product.id}`} className="text-decoration-none">
                <h6 className="text-dark">{product.title}</h6>
             </Link>
                <p className="text-dark fs-6 fw-bold">${product.price.toFixed(2)}</p>
                <a href="#" onClick={()=>AddToCart(product)} className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1 text-primary">
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
