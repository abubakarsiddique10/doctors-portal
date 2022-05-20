import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);
    const { name, slots, _id, price } = treatment;
    const treatmentDate = format(date, 'PP');
   
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking= {
            treatmentId: _id,
            treatment: name,
            slot: slot,
            price,
            date: treatmentDate,
            patient: user.displayName,
            email: user.email,
            phone: event.target.phone.value,
        }

        fetch('https://fathomless-wave-58176.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                toast(`Appointment is set ${treatmentDate} at ${slot}`)
            }
            else {
                toast.error(`already have an appointment on ${data.booking.date} at ${data.booking.slot}`)
            }
            refetch()
            setTreatment(null)
        })
        
    }
   
    return ( 
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking For: {name}</h3>
                    <form onSubmit={handleBooking} className="text-center">
                        <input type="text" value={format(date, 'PP')} className="input w-full input-bordered my-3 max-w-xs" />
                        <select name="slot" className="select select-bordered w-full mb-3 max-w-xs">
                            {slots?.map((slot, index) => <option key={index} value={slot}>{slot}</option>)}
                        </select>
                        <input name="name" type="text" disabled readOnly value={user?.displayName || ""} className="input w-full input-bordered mb-3 max-w-xs" />
                        <input name="email" type="email" disabled readOnly value={user?.email || ""} className="input w-full input-bordered mb-3 max-w-xs" />
                        <input name="phone" type="phone" placeholder="Phone number" className="input w-full input-bordered mb-3 max-w-xs" />
                        <input type="submit" value="Submit" className="input w-full btn btn-secondary  max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default BookingModal;