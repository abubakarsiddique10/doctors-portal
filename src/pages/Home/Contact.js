import React from "react";
import appointment from '../../assets/images/appointment.png';
import Button from "../Shared/Button";
const Contact = () => {
    return (
        <section className="py-20 text-white" style={{ background: `url(${appointment})` }}>
            <div className="text-center">
                <h5 className="text-3xl">Contact us</h5>
                <h1 className="text-5xl mb-5">Stay connected with us</h1>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <form className="w-96">
                        <input type="text" placeholder="Type here" class="input w-full  mb-4" />
                        <input type="text" placeholder="Type here" class="input w-full mb-4" />
                        <textarea type="text" placeholder="Type here" class="input w-full  h-24" ></textarea>
                    </form>
                    <Button>Submit</Button>
                </div>
            </div>
        </section>
    )
}
export default Contact;