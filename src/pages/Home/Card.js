import React from "react";
const Card = ({ info }) => {
    const { icon, text, bgColor } = info;
    return (
        <div className={`card card-side bg-base-100 shadow-xl bg-current font-white py-[40px] ${bgColor}`}>
            <figure><img src={icon} className="pl-8" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">New movie is released!</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default Card;