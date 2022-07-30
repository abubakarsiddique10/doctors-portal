import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import banner from '../../assets/images/chair.png';
const AppointmentBanner = ({ date, setDate }) => {

    return (
        <section>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20 py-10">
                    <img src={banner} className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AppointmentBanner;



const tool =
    [
        {
            "name": "The Machine Screw",
            "image": "https://i.ibb.co/23jjfMk/tool1.png",
            "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
            "quantity": 10,
            "available": 500,
            "price": 5
        },
        {
            "name": "The Machine Screw",
            "image": "https://i.ibb.co/jwBFjH0/tool2.png",
            "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
            "quantity": 10,
            "available": 500,
            "price": 5
        },
        {
            "name": "The Machine Screw",
            "image": "https://i.ibb.co/hCBnvsW/tool3.png",
            "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
            "quantity": 10,
            "available": 500,
            "price": 5
        },
        {
            "name": "The Machine Screw",
            "image": "https://i.ibb.co/CnYVz27/tool5.png",
            "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
            "quantity": 10,
            "available": 500,
            "price": 5
        },
        {
            "name": "The Machine Screw",
            "image": "https://i.ibb.co/d5Hj3vr/tool4.png",
            "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
            "quantity": 10,
            "available": 500,
            "price": 5
        },
        {
            "name": "The Machine Screw",
            "image": "https://i.ibb.co/pr7CQSL/tool6.png",
            "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
            "quantity": 10,
            "available": 500,
            "price": 5
        },
        {
            "name": "The Machine Screw",
            "image": "https://i.ibb.co/gr4sNkW/tool7.png",
            "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
            "quantity": 10,
            "available": 500,
            "price": 5
        }
    ]