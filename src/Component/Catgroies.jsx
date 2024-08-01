
import { useState,useEffect } from "react"
import axios from "axios";
const Categories=({})=>{
    const[category,setcategory]=useState([])
    
    const [products,setproducts]= useState(null);
    useEffect(() => {
        const fetchCategories = () => {
          axios.get('https://fakestoreapi.com/products')
            .then(response => {
              const productsdata = response.data;
              setproducts(productsdata);
              // Extracting unique categories
              const uniqueCategories = [...new Set(productsdata.map(product => product.category))];
              setcategory(uniqueCategories);
            })
            .catch(error => {
              console.error('Error fetching categories:', error);
            });
        };
    
        fetchCategories();
    
      }, []);
    return(
        <div className="col-lg-3">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        
                                        <div className="mb-3">
                                            <h4>Categories</h4>
                                            
                                            <ul className="list-unstyled fruite-categorie">
                                            {category.map((cat,index)=>(
                                                <li key={index}>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-eye me-2"></i>{cat}</a>
                                                        <span>({products.filter(product => product.category === cat).length})</span>

                                                    </div>
                                                </li>
                                    ))}
                                            
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                    <div className="mb-3">
    
                                     </div>

                                    </div>
                                   
                                    
                                </div>
                            </div>
    )
}
export default Categories