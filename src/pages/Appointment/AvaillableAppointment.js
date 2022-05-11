import React from "react";
import BookingModal from "./BookingModal";
const AvaillableAppointment = ({ service, setTreatment }) => {
    const { _id, name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{slots.length ? slots[0] : <span className="text-red-500">Try another day</span>}</p>
                <p>
                    {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length == 0} for="booking-modal"
                        className="btn modal-button bg-secondary text-white border-0">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    )
}
export default AvaillableAppointment;