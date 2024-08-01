import {useCart} from '../Component/CartContext'
import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import PaymentForm from '../Component/PaymentForm'

const CheckOut=()=>{


const{cart}=useCart()

const [checkoutItems,setcheckoutItems]= useState(cart || [])
useEffect(()=> {
    setcheckoutItems(cart || [])
    console.log({cart})  
}, [cart])

//subtotal
const CalSubTotal=()=>{
    return checkoutItems.reduce((total,item) => {
        return total +(item.price *item.quantity);
    },0).toFixed(2);
};
//total
const Total=(price,quantity)=>{
    return(price*quantity).toFixed(2);
  }

  const T=CalSubTotal();

  // proccess the payment
  const stripePromise = loadStripe('pk_test_51PibEnHQGRNmZVTJ4PhURRnXA9r9U2PaYZzOaKTaYHgL7wLJFo90uVp4GlKSTy3N4Q4co4FajHANFys7RPwa51kl00zQ03Js5W');



    return(<>
     <div className="container-fluid py-5">
            <div className="container py-5">
                <h1 className="mb-4">Billing details</h1>
                <form action="#">
                    <div className="row g-5">
                        <div className="col-md-12 col-lg-6 col-xl-7">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">First Name<sup>*</sup></label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">Last Name<sup>*</sup></label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Company Name<sup>*</sup></label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Address <sup>*</sup></label>
                                <input type="text" className="form-control" placeholder="House Number Street Name"/>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Town/City<sup>*</sup></label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Country<sup>*</sup></label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Postcode/Zip<sup>*</sup></label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Mobile<sup>*</sup></label>
                                <input type="tel" className="form-control"/>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Email Address<sup>*</sup></label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="form-check my-3">
                                <input type="checkbox" className="form-check-input" id="Account-1" name="Accounts" value="Accounts"/>
                                <label className="form-check-label" for="Account-1">Create an account?</label>
                            </div>
                            <hr/>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" id="Address-1" name="Address" value="Address"/>
                                <label className="form-check-label" for="Address-1">Ship to a different address?</label>
                            </div>
                            <div className="form-item">
                                <textarea name="text" className="form-control" spellcheck="false" cols="30" rows="11" placeholder="Oreder Notes (Optional)"></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-5">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Products</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {checkoutItems.map(item=>(
                                        <tr key={item.id}>
                                            <th scope="row">
                                                <div className="d-flex align-items-center mt-2">
                                                    <img src={item.image} className="img-fluid rounded-circle" style={{width: '90px', height: '90px'}} alt=""/>
                                                </div>
                                            </th>
                                            <td className="py-5">{item.title}</td>
                                            <td className="py-5">{item.price} $</td>
                                            <td className="py-5">{item.quantity}</td>
                                            <td className="py-5">{Total(item.price,item.quantity)} $</td>
                                        </tr>
                                        ))}
                                        
                                        
                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td className="py-5"></td>
                                            <td className="py-5"></td>
                                            <td className="py-5">
                                                <p className="mb-0 text-dark py-3">Subtotal</p>
                                            </td>
                                            <td className="py-5">
                                                <div className="py-3 border-bottom border-top">
                                                    <p className="mb-0 text-dark">{CalSubTotal()}</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td className="py-5">
                                                <p className="mb-0 text-dark py-4">Shipping</p>
                                            </td>
                                            <td colspan="3" className="py-5">
                                                <div className="form-check text-start">
                                                    <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-1" name="Shipping-1" value="Shipping"/>
                                                    <label className="form-check-label" for="Shipping-1">Free Shipping</label>
                                                </div>
                                                
                                            </td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Transfer-1" name="Transfer" value="Transfer"/>
                                        <label className="form-check-label" for="Transfer-1">Direct Bank Transfer</label>
                                    </div>
                                    <p className="text-start text-dark">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                </div>
                            </div>
                            
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Delivery-1" name="Delivery" value="Delivery"/>
                                        <label className="form-check-label" for="Delivery-1">Cash On Delivery</label>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                                <button type="button" className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Place Order</button>
                            </div>
                        </div>
                        <Elements stripe={stripePromise}>
              <PaymentForm total={T} />
            </Elements>
                    </div>
                </form>
            </div>
        </div>
    </>)
}
export default CheckOut