import React from "react";
import doctors from '../../assets/images/png-3-1.png';
import appointment from '../../assets/images/appointment.png';
import Button from "../Shared/Button";
const Appointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className="mb-28 py-20 lg:py-0">
            <div className="hero container">
                <div className="hero-content flex-col lg:flex-row px-0 gap-x-5 p-0">
                    <img src={doctors} className="max-w-sm hidden lg:block lg:mt-20" />
                    <div className="text-white">
                        <h5 className="text-primary text-3xl">Appointment</h5>
                        <h1 className="text-5xl font-bold mt-5">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>get started</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Appointment;