import React from "react";
import img from '../../assets/images/doctor2.png'
import Button from "../Shared/Button";
const Banner = () => {
    return (
        <section className="bg-[#1F4F80] text-white mb-28">
            <div className="hero container">
                <div className="hero-content flex-col lg:flex-row-reverse box-border p-0">
                    <img src={img} className="max-w-lg mt-28" />
                    <div className="lg:py-0 py-10">
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-5 text-lg pr-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <Button>get started</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;