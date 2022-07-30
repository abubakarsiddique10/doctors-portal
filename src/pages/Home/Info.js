import React from "react";
import Card from "./Card";
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    const information = [
        {
            _id: 1,
            icon: clock,
            title: 'Opening Hours',
            text: 'Lorem Ipsum is simply dummy text of the pri',
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            _id: 2,
            title: 'Visit our location',
            icon: marker,
            text: 'Lorem Ipsum is simply dummy text of the pri',
            bgColor: "bg-accent",
        },
        {
            _id: 3,
            title: 'Contact us now',
            icon: phone,
            text: '+000 123 456789',
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        }
    ]
    return (
        <section className="mb-28">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 container">
                {
                    information.map(info => <Card key={info._id} info={info} />)
                }
            </div>
        </section>
    )
}
export default Info;