import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    console.log(appointments)
    useEffect(() => {
        if (user) {
            fetch(`https://fathomless-wave-58176.herokuapp.com/booking?email=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status == 401 || res.status == 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => setAppointments(data))
        }
    }, [user])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((appointment, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{appointment.patient}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.treatment}</td>
                                <td>
                                    {(appointment.price && !appointment.paid) && <Link to={`/dashboard/payment/${appointment._id}`}><button className="btn btn.success">Pay</button></Link>}
                                    {(appointment.price && appointment.paid) && <div>
                                        <button className="btn btn.success">Paid</button>
                                        <p>Transection Id: {appointment.transectionId}</p>
                                    </div>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MyAppointment;