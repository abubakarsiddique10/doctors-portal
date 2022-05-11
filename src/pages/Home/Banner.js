import React from "react";
import img from '../../assets/images/chair.png'
import bgImg from '../../assets/images/bg.png'
import Button from "../Shared/Button";
const Banner = () => {
    return (
        <section >
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse box-border">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <Button>get started</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;