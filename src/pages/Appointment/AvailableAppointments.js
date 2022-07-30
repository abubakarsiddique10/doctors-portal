import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AvaillableAppointment from "./AvaillableAppointment";
import BookingModal from "./BookingModal";
const AvailableAppointments = ({ date }) => {
    //const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');

    /* useEffect(() => {
        fetch(`https://fathomless-wave-58176.herokuapp.com/availabe?date=${formatedDate}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [formatedDate]) */

    // second step
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`https://fathomless-wave-58176.herokuapp.com/availabe?date=${formatedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <section className="my-20">
            <div className="container">
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
                {treatment && <BookingModal refetch={refetch} setTreatment={setTreatment} services={services} date={date} treatment={treatment} />}
            </div>
        </section>
    )
}
export default AvailableAppointments;