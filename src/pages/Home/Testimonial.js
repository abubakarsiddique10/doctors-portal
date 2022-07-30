import React from "react";
import qoute from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Patient from "./Patient";
const Testimonial = () => {
    const patients = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
        },

    ]
    return (
        <section className="mb-28">
            <div className="container">
                <div className="flex justify-between">
                    <div className="">
                        <h3 className="text-xl">Testimonial</h3>
                        <h1 className="text-4xl">What Our Patients Says</h1>
                    </div>
                    <img className="w-48" src={qoute} alt="" />
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        patients.map(patient => <Patient key={patient._id} patient={patient} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Testimonial;