import React from "react";
import img from '../../assets/images/chair.png'
import bgImg from '../../assets/images/bg.png'
const Banner = () => {
    return (
        <section >
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse box-border">
                    <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn text-white font-bold border-0 bg-gradient-to-r from-secondary to-primary">get started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;