import React from "react";
import { toast } from "react-toastify";
const DeleteConfirm = ({ deletignDoctor, refetch, setdeletignDoctor}) => {
    const { name, email} = deletignDoctor;
    const handleDelete = () => {
        fetch(`https://fathomless-wave-58176.herokuapp.com/doctors/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('doctor delete success');
                    setdeletignDoctor(null)
                    refetch()
                }
            })
    }
    return(
        <div>
            <input type="checkbox" id="delete-confirm" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">are you sure you want to delete ${name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-sm">Delete</button>
                        <label for="delete-confirm" class="btn btn-sm">cancel!</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteConfirm;