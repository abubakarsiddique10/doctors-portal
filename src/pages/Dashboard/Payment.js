import React, { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe('pk_test_51L1MX0FVsslLtOw8WUuAvww3deCWTD1vXCZ7WPdqT8XdkwU9emggM8CsUMxpX5n8uWP7KygNLJILkP6InvzkmbGb001mI9b6d5');

const Payment = () => {
    const {id}= useParams();
    const [appointment, setAppointment] = useState({})
    useEffect(()=> {
        fetch(`https://fathomless-wave-58176.herokuapp.com/bookings/${id}`)
        .then(res => res.json())
        .then(data => {
            setAppointment(data)
        })
    },[])

    return(
       <div className>
            <div class="card w-96 bg-base-100 shadow-xl mb-6 mx-auto">
                <div class="card-body">
                    <h2 class="card-title">Hello, {appointment.patient}</h2>
                    <p>Please pay for: {appointment.treatment}</p>
                    <p>Your appointment {appointment.date} at {appointment.slot}</p>
                    <span>Please Pay: {appointment.price}</span>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mb-6 mx-auto">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment}/>
                    </Elements>
                </div>
            </div>
       </div>
    )
}
export default Payment;