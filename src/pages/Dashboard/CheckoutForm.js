
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
const CheckoutForm = ({ appointment}) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState('');

    const stripe = useStripe();
    const elements = useElements();
    
    const {price, patient, email, _id} = appointment;
   
    useEffect(()=> {
        if(price) {
            fetch('https://fathomless-wave-58176.herokuapp.com/create-payment-intent', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ price: price })
            })
            .then(res => res.json())
            .then(data => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
        }
    },[price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null) {
            return
        }
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        
        setCardError(error?.message || "");
        setProcessing(true);
        //setSuccess('')

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email,
                    },
                },
            },
        );

         if(intentError) {
           setCardError(intentError?.message);
           setSuccess('');
           setProcessing(false);
        }
        else{
            setCardError('');
            setSuccess('Congrats! your payment is completed');
            setTransectionId(paymentIntent.id);

            // store payment on database
             const payment = {
                 appointmentId: _id,
                 transectionId: paymentIntent.id,
             }
             fetch(`https://fathomless-wave-58176.herokuapp.com/bookings/${_id}`, {
                 method: "PATCH",
                 headers: {
                     "content-type": "application/json",
                 },
                 body: JSON.stringify(payment)
             })
             .then(res => res.json())
             .then(data => {
                 setProcessing(false);
                 console.log(data)
             })
        }  
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm mt-3" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
           {
               cardError && <p className="text-red-500">{cardError}</p>
           }
           {
               success && <div>
                    <p className="text-green-500">{success}</p>
                    <p className="text-orange-500">{transectionId}</p>
               </div>
           }
        </>
    )
}
export default CheckoutForm;