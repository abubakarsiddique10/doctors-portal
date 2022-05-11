import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvaillableAppointment from "./AvaillableAppointment";
import BookingModal from "./BookingModal";
const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="mt-20">
            <h1 className="text-center text-2xl text-secondary font-bold">Available Appointments: {format(date, 'PP')}</h1>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <AvaillableAppointment
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AvaillableAppointment>)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} services={services} date={date} treatment={treatment} />}
        </section>
    )
}
export default AvailableAppointments;