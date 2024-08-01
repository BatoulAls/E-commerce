import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const handelchange=(event)=>{

    if(event.error){

      setError(event.error.message);
    }
    else{
      setError(null);

    }
   

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (result.error) {
      setError(result.error.message);
      setProcessing(false);
    } else {
      
      console.log(result.paymentMethod);
      
      console.log('Payment successful!');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <CardElement 
          onChange={handelchange}
         
        />
       
       {error && <div className="card-error">{error}</div>}
      <button type="submit" disabled={!stripe || processing} className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary mt-4">
        {processing ? 'Processing...' : `Pay $${total}`}
      </button>
    </form>
  );
};

export default PaymentForm;