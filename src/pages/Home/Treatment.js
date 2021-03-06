import React from "react";
import treatment from '../../assets/images/treatment.png';
import Button from "../Shared/Button";
const Treatment = () => {
    return (
        <section className="mb-28">
            <div className="hero container">
                <div className="hero-content flex-col lg:flex-row-reverse p-0">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>get started</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Treatment;

