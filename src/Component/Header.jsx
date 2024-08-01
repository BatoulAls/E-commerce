
import '../assets/lib/lightbox/css/lightbox.min.css'
import '../assets/lib/owlcarousel/assets/owl.carousel.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '../assets/css/all.css'
import '../assets/css/icons.css'
import '../assets/css/fonts.css'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const Header=()=>{
    const navigateTo = useNavigate();
    const { cart } = useCart();

    const handleCartClick = () => {
        
        navigateTo('/cart') // Navigate to the cart page
    };
 
    
    return(<>
    
    <div className="container-fluid fixed-top">
    <div className="container topbar bg-primary d-none d-lg-block">
        <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
                <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#" className="text-white">Abu Dhabi</a></small>
                <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a href="#" className="text-white">batoul.alsharif@icloud.com</a></small>
            </div>
            
        </div>
    </div>
    <div className="container px-0">
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Products</h1></a>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    
                    
              
                    <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                </div>
                <div className="d-flex m-3 me-0">
                    
                <button
                                    onClick={handleCartClick}
                                    className="position-relative me-4 my-auto btn btn-link"
                                >
                                    <i className="fa fa-shopping-bag fa-2x"></i>
                                    {cart.length > 0 && (
                                        <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1">
                                            {cart.length}
                                        </span>
                                    )}
                                </button>
                   


                   

                    
                </div>
            </div>
        </nav>
    </div>
</div>

<div className="container-fluid page-header py-5">
            
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="/" className="nav-item nav-link">Home</a></li>
               
            </ol>
        </div>
        
    </>)
}

export default Header