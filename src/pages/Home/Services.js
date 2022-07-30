import React from "react";
import Service from "./Service.";
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            _id: 2,
            img: cavity,
            title: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            _id: 3,
            img: whitening,
            title: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
    ]
    return (
        <section className="mb-28">
            <div className="container">
                <div className="text-center mb-16">
                    <h5 className="text-xl">Our Services</h5>
                    <h1 className="text-3xl">Services We Provide</h1>
                </div>
                <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                    {
                        services.map(service => <Service key={service._id} service={service} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Services;