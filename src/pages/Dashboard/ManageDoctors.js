import React, {useState} from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirm from "./DleteConfirm";
import DoctorRow from "./DoctorRow";
const ManageDoctors = () => {
    const [deletignDoctor, setdeletignDoctor] = useState(null);
    const {data:doctors, isLoading, refetch} = useQuery('doctors', () => fetch('https://fathomless-wave-58176.herokuapp.com/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));
    if(isLoading) {
        <Loading/>
    }
    return(
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Specialty</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors?.map((doctor, index) =>
                         <DoctorRow key={doctor._id} 
                         setdeletignDoctor={setdeletignDoctor}
                         doctor={doctor} index={index}
                         refetch={refetch}></DoctorRow>)
                    }
                </tbody>
            </table>
            {deletignDoctor && <DeleteConfirm
            refetch={refetch}
            setdeletignDoctor={setdeletignDoctor}
            deletignDoctor={deletignDoctor}
            />}
        </div>
    )
}
export default ManageDoctors;