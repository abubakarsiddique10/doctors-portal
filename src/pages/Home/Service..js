import React from "react";
const Service = ({ service }) => {
    const { img, details, title, } = service;
    console.log(service)
    return (
        <div class="card w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    )
}
export default Service;