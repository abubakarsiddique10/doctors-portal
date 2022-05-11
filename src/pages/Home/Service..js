import React from "react";
const Service = ({ service }) => {
    const { img, details, title, } = service;
    console.log(service)
    return (
        <div className="card w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    )
}
export default Service;