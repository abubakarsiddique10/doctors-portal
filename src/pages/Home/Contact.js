import React from "react";
import appointment from '../../assets/images/appointment.png';
import Button from "../Shared/Button";
import address from "../../assets/icons/adress.png";
import call from "../../assets/icons/call.png";
import email from "../../assets/icons/email.png";
const Contact = () => {
    return (
        <section id="contact" className="py-20 mb-28 text-white" style={{ background: `url(${appointment})` }}>
            <div className="container">
                <div>
                    <h5 className="text-4xl font-medium text-center mb-20 title">Contact me</h5>
                </div>
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="mb-8">
                        <h5 className="text-2xl font-semibold mb-5">Contact me to get your work done</h5>
                        {/* <div className="flex items-center mb-3">
                            <img className="mr-7" alt="man" />
                            <div>
                                <h5 className="text-xl font-medium">Name</h5>
                                <h5 className="name text-xl">Muhammad Abu Bakar</h5>
                            </div>
                        </div> */}
                        <div className="flex items-center mb-3">
                            <div className="bg-white w-8 h-8 flex justify-center items-center mr-7 rounded-lg">
                                <img src={call} className="w-[16px]" alt="man" />
                            </div>
                            <div>
                                <h5 className="text-xl font-medium">Phone</h5>
                                <h5 className="phone">+880 1857-925456</h5>
                            </div>
                        </div>
                        <div className="flex items-center mb-3">
                            <div className="bg-white w-8 h-8 flex justify-center items-center mr-7 rounded-lg">
                                <img src={email} className="w-[16px]" alt="man" />
                            </div>
                            <div>
                                <h5 className="text-xl font-medium">Email</h5>
                                <h5 className="email">doctorportal@gmail.com</h5>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-white w-8 h-8 flex justify-center items-center mr-7 rounded-lg">
                                <img src={address} className="w-[16px]" alt="man" />
                            </div>
                            <div>
                                <h5 className="text-xl font-medium">Adress</h5>
                                <h5 className="adress">Chattogram, Bangladesh</h5>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:max-w-[630px] contact">
                        <form>
                            <div className="lg:flex gap-3 mb-3">
                                <div className="form-control w-full mb-3 lg:mb-0">
                                    <input type="text" name="name" placeholder="Your Name" />
                                </div>
                                <div className="form-control w-full">
                                    <input type="text" name="email" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="form-control mb-3">
                                <input type="text" name="name" placeholder="Subject" />
                            </div>
                            <div className="form-control">
                                <textarea className="h-36 pt-2" name="message" placeholder="Type a massage..."></textarea>
                            </div>
                            <div className="mt-4">
                                <Button type="submit">send message</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Contact;

{/* <section className="py-20 mb-28 text-white" style={{ background: `url(${appointment})` }}>
            <div className="container">
                <div className="text-center">
                    <h5 className="text-3xl">Contact us</h5>
                    <h1 className="text-5xl mb-5">Stay connected with us</h1>
                </div>
                <div className="flex justify-center items-center">
                    <div>
                        <form className="w-96">
                            <input type="text" placeholder="Type here" className="input w-full  mb-4" />
                            <input type="text" placeholder="Type here" className="input w-full mb-4" />
                            <textarea type="text" placeholder="Type here" className="input w-full  h-24" ></textarea>
                        </form>
                        <Button className="w-full ">Submit</Button>
                    </div>
                </div>
            </div>
        </section> */}