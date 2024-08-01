import '../../assets/lib/lightbox/css/lightbox.min.css'
import '../../assets/lib/owlcarousel/assets/owl.carousel.min.css'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '../../assets/css/all.css'
import '../../assets/css/icons.css'
import '../../assets/css/fonts.css'
import { Link } from 'react-router-dom';
import { useState,useEffect } from "react"
import axios from "axios";
import {useCart} from '../CartContext'
import Categories from '../Catgroies'
import Sorting from '../Sorting'

import Se from '../Se'



const Products =()=>{
    const [products,setproducts]= useState([]);
    const[Search,setSearch]=useState('');
    const [SearchProduct,setSearchProduct]=useState([])
    const[filterProducts,setfilterProducts]=useState([])
   // const [cart, setCart] = useState([]);
    const{addcart}=useCart()
    // for pagination
    const[currentpage,setcurrentpage]=useState(1)
    const ItemsPerPage=5;
    const lastindexpage=ItemsPerPage * currentpage
    const firstindexpage =lastindexpage- ItemsPerPage
    const currentProduct = filterProducts && filterProducts.slice(firstindexpage,lastindexpage)
    
    const Paginate = (pageNumber)=>setcurrentpage(pageNumber)
    const totalPages = 5
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            setproducts(response.data);
            setfilterProducts(response.data)

            console.log(response.data)


        })
        .catch(error=>{
            console.error('error product',error);
        })
    },[]);

    

    const HandelInputChange =(e)=>{
        const query=(e.target.value)
        setSearch(query)

        
            if (query.trim() === '') {
                setfilterProducts(products)


        }
        else{
            const fillter = products.filter(product=>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setfilterProducts(fillter);


        }
        setcurrentpage(1);
        

    }
   

    
    const AddToCart = (product) => {
        
            const productToAdd = {
                ...product,
                quantity: 1
            };
            console.log("Adding to cart:", productToAdd);
            addcart(productToAdd);
        
    }

   


    
    // sorting by category
    const[SortingOption,setSortingOption]=useState('');
    

    // Function to handle sorting option change
    const handelSorting=(e)=>{
        const selectedOption = e.target.value;
        setSortingOption(selectedOption)  
         if (selectedOption === '') {
            setfilterProducts(products);
        } else {
            const filtered = products.filter(product => product.category === selectedOption);
            setfilterProducts(filtered);
        }
        setcurrentpage(1);
       
    }
    
    return (<>
        <div className="container-fluid fruite py-5">
            <div className="container py-5">
                <h1 className="mb-4">Products shop</h1>
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="row g-4">
                            
                                
                        <Se Search={Search} HandelInputChange={HandelInputChange}/>
                           
                            <div className="col-6"></div>

                           
                            <Sorting handelSorting={handelSorting} SortingOption={SortingOption} />
                        </div>
                        <div className="row g-4">
                           <Categories/>
                            
                            <div className="col-lg-9">
    {products ? (
        <div className="row g-4 justify-content-center">
            {(SearchProduct.length > 0 ? SearchProduct : currentProduct).filter(product=>SortingOption === '' ? true : product.category === SortingOption).map(product => (

                <div key={product.id} className="col-md-6 col-lg-6 col-xl-4">
                    <div className="rounded position-relative fruite-item h-100 d-flex flex-column">
                        <div className="fruite-img">
                            <img
                                src={product.image}
                                className="img-fluid w-100 rounded-top"
                                style={{ maxHeight: '200px', objectFit: 'cover' }}
                                alt=""
                            />
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>{product.category}</div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom flex-grow-1 d-flex flex-column">
                            
                            <Link to={`/product/${product.id}`}><h6>{product.title}</h6></Link>
                            <div className="d-flex justify-content-between">
                                <p className="text-dark fs-5 fw-bold mb-0">${product.price}</p>
                                <a href="#"  onClick={() => AddToCart(product)} className="btn border border-secondary rounded-pill px-3 text-primary">
                                    <i className="fa fa-shopping-bag me-2 text-primary" ></i> Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

           

            <div className="col-12">
                <div className="pagination d-flex justify-content-center mt-5">
                    <a href="#" className="rounded" onClick={() => Paginate(currentpage - 1)}>&laquo;</a>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <a
                            href="#"
                            key={index}
                            className={`rounded ${currentpage === index + 1 ? 'active' : ''}`}
                            onClick={() => Paginate(index + 1)}
                        >
                            {index + 1}
                        </a>
                    ))}
                    
                    
                    <a href="#" className="rounded">&raquo;</a>
                </div>
            </div>
        </div>
    ) : (
        <p>Loading product...</p>
    )}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       
       


        



                

      
       
   
    
    </>)
}
export default Products