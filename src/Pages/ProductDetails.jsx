import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios";
import '../assets/lib/lightbox/css/lightbox.min.css'
import '../assets/lib/owlcarousel/assets/owl.carousel.min.css';
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '../assets/css/all.css'
import '../assets/css/icons.css'
import '../assets/css/fonts.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useCart} from '../Component/CartContext'
import ReviewsDisplay from '../Component/ReviewsDisplay'
import SubmitReview from '../Component/SubmitReview'
import RelatedProducts from '../Component/RelatedProducts'




const ProductDetails=()=>{
    
    const { id } = useParams(); // Get the id parameter from the URL
    console.log(`ProductDetails component rendered with id: ${id}`);
    const[Product, setProduct] = useState(null)
    const {addcart}=useCart()

    
    

    const AddToCart = () => {
        if (Product) {
            const productToAdd = {
                ...Product,
                quantity: quantity
            };
            console.log("Adding to cart:", productToAdd);
            addcart(productToAdd);
        }
    }
    // quantity
    
    const [quantity, setQuantity] = useState(1);
    const IncreaseQuantity = () => {
        setQuantity(prev => prev + 1);
      }
      
      const DecreaseQuantity = () => {
        setQuantity(prev => Math.max(1, prev - 1));
      }
      const{cart}=useCart()
      useEffect(() => {
        if (Product && cart) {
            const cartItem = cart.find(item => item.id === Product.id);
            if (cartItem) {
                setQuantity(cartItem.quantity);
            } else {
                setQuantity(1); // Reset to 1 if not in cart
            }
        }
    }, [Product, cart]);


    useEffect(()=>{
        // Fetch product details based on id
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(Response=>{
          setProduct(Response.data)
        })        
        .catch(error=>{
           console.error('error product',error);
        })


    },[id])
    if (!Product) {
        return <p>Loading...</p>;
      }
      const RatingStars = () => {
        const rating = Product.rating.rate
        if (rating === null) return;

       
      const filledStars = Math.floor(rating);
      const unfilledStars = 5 - filledStars;
      const stars = [];
     
      for (let i = 0; i < filledStars; i++) {
        stars.push(<i key={i} className="fa fa-star text-secondary"></i>);
      }
      for (let i = 0; i < unfilledStars; i++) {
        stars.push(<i key={`empty-${i}`} className="fa fa-star"></i>);
      }
      return stars;
    };
                                
    return(
    <div className="container-fluid py-5 mt-5">
            <div className="container py-5">
                <div className="row g-4 mb-5">
                    <div className="col-lg-8 col-xl-9">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="border rounded">
                                    <a href="#">
                                        <img src={Product.image} className="img-fluid rounded" alt="Image"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h4 className="fw-bold mb-3">{Product.title}</h4>
                                <p className="mb-3">Category: {Product.category}</p>
                                <h5 className="fw-bold mb-3">${ Product.price}</h5>
                                
                                <div className="d-flex mb-4">
                                   {RatingStars()}
                                </div>
                                <p className="mb-4">{Product.description}</p>
                                
                                <div className="input-group quantity mb-5" style={{width: '100px'}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={DecreaseQuantity} >
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm text-center border-0" value={quantity} />
                                    <div className="input-group-btn">
                                        <button  className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={IncreaseQuantity}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary" onClick={()=>AddToCart(Product)}><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>

                            <div className="col-lg-12">
                                <nav>
                                    <div className="nav nav-tabs mb-3">
                                        <button className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                            id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                            aria-controls="nav-about" aria-selected="true">Description</button>
                                        <button className="nav-link border-white border-bottom-0" type="button" role="tab"
                                            id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission"
                                            aria-controls="nav-mission" aria-selected="false">Reviews</button>
                                    </div>
                                </nav>
                                <div className="tab-content mb-5">
                                    <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                        <p>{Product.description} </p>
                                     
                                    </div>

            

                                    <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">

                                        <ReviewsDisplay/>
                                        
                                        
                                    </div>
                                    
                                    <div className="tab-pane" id="nav-vision" role="tabpanel">
                                        <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                            amet diam et eos labore. 3</p>
                                        <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                            Clita erat ipsum et lorem et sit</p>
                                    </div>
                                </div>
                            </div>
                            
                            <SubmitReview/>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-3">
                        <div className="row g-4 fruite">
                            <div className="col-lg-12">
                                
                                <div className="mb-4">
                                    <h4>Categories</h4>
                                    <ul classNameName="list-unstyled fruite-categorie">
                                        <li>
                                        <div classNameName="fruite-name text-center">
                                                <a href="#"><i className="fas fa-eye me-2"></i>{Product.category}</a>
                                                
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                <RelatedProducts key={id} category={Product.category}/>
            </div>
        </div>
     
        )
}

export default ProductDetails