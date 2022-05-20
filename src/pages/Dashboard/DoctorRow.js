import React from "react";
import { toast } from "react-toastify";
const DoctorRow = ({ doctor, index, refetch, setdeletignDoctor}) => {
    const { name, image, specialty , email} = doctor;
    console.log(doctor)

    return(
        <tr>
            <th>{index+1}</th>
            <td>
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={image} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setdeletignDoctor(doctor)} for="delete-confirm" class="btn modal-button btn btn-sm">DELETE</label>
            </td>
        </tr>
    )
}
export default DoctorRow