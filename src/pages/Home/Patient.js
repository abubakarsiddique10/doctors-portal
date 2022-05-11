import React from "react";
const Patient = ({ patient }) => {
    const { name, img, title, details, address } = patient;
    return (
        <div className="card shadow-xl font-white p-10">
            <p>{details}</p>
            <div className="flex items-center mt-5">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                </div>
                <div className="ml-4">
                    <h5>{name}</h5>
                    <span>{address}</span>
                </div>
            </div>
        </div>
    )
}
export default Patient;