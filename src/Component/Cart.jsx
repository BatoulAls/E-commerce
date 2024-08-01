

import { useEffect, useState } from 'react';
//import { useLocation } from 'react-router-dom';
import {useCart} from './CartContext'
import { Link } from 'react-router-dom';
const Cart = () => {
    const{cart}=useCart()
    const{removeFromCart}= useCart()
    

    //const location = useLocation();
   // console.log('Location:', location); // Check what location object contains

  
  //  const { cart } = location.state || {};
    
    //cart state
    const[cartitems,setcartitems]=useState(cart || []);
    useEffect(() => {
        setcartitems(cart || []); // Update cartitems state when cart context changes
    }, [cart]);
    console.log({cart})

    const IncreaseQuantity=(ItemID)=>{
        const increase = cartitems.map(item=>

           {
            if(item.id===ItemID){
                return {...item, quantity:item.quantity+1}   
                 
            }
            return item;

           });
           setcartitems(increase);
    }

    const DecreaseQuantity=(ItemId)=>{
        const decrease = cartitems.map(item=>{
            if(item.id===ItemId){
                return{...item,quantity:item.quantity-1}
            }
            return item;
        })
        setcartitems(decrease)
    }
    

    const CalSubTotal=()=>{
        return cartitems.reduce((total,item) => {
            return total +(item.price *item.quantity);
        },0).toFixed(2);
    };
 
    if (!cart || cart.length === 0) {
        return <p>Your cart is empty.</p>;
      }

   

      const removeItem = (itemid)=>{
        removeFromCart(itemid)
      }

      const Total=(price,quantity)=>{
        return(price*quantity).toFixed(2);
      }





    return (
      

        <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                        {cartitems.map(item=>(
                        
                        <tr key={item.id}>
                        
                            <th scope="row">
                                <div className="d-flex align-items-center">
                                    <img src={item.image} className="img-fluid me-5 rounded-circle" style={{width: "80px", height: "80px"}} alt=""/>
                                </div>
                            </th>
                            <td>
                                <p className="mb-0 mt-4">{item.title}</p>
                            </td>
                            <td>
                                <p className="mb-0 mt-4">{item.price} $</p>
                            </td>
                            <td>
                                <div className="input-group quantity mt-4" style={{width: "100px"}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={()=>{DecreaseQuantity(item.id)}} >
                                        <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm text-center border-0" value={item.quantity}/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={()=>{IncreaseQuantity(item.id)}}  >
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="mb-0 mt-4">{Total(item.price,item.quantity)} $</p>
                            </td>
                            <td>
                                <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={()=>removeItem(item.id)} >
                                    <i className="fa fa-times text-danger"></i>
                                </button>
                            </td>
                        
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
            
            <div className="row g-4 justify-content-end">
                <div className="col-8"></div>
                <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                    <div className="bg-light rounded">
                        <div className="p-4">
                            <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                            <div className="d-flex justify-content-between mb-4">
                                <h5 className="mb-0 me-4">Subtotal:</h5>
                                <p className="mb-0">${CalSubTotal()}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5 className="mb-0 me-4">Shipping</h5>
                                <div className="">
                                    <p className="mb-0">Flat rate: $3.00</p>
                                </div>
                            </div>
                            <p className="mb-0 text-end">Shipping to United Arab .</p>
                        </div>
                        <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                            <h5 className="mb-0 ps-4 me-4">Total</h5>
                            <p className="mb-0 pe-4">  ${(parseFloat(CalSubTotal()) + 3).toFixed(2)}</p>
                           
                        </div>
                        
                        <Link to='/checkout' className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4">Proceed Checkout</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Cart;