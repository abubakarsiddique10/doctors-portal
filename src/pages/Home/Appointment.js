import React from "react";
import doctors from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';
import Button from "../Shared/Button";
const Appointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row py-20">
                    <img src={doctors} className="max-w-sm rounded-lg shadow-2xl hidden lg:block" />
                    <div className="ml-10 text-white">
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