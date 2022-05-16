import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading) {
        <Loading/>
    }
    const makeAdmin = (email, role) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Beares ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403) {
                toast.error('Failed to make an admin')
            }
            return res.json()
        })
        .then(data => {
           if(data.modifiedCount > 0) {
               refetch();
               toast('Successfully made an admin')
           }
        })
    }
    
    return(
        <div>
            <h1>All Users: {users?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr  key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.email}</td>
                                {user.role !== 'admin' && <td><button onClick={() => makeAdmin(user.email)} className="btn btn-sm">Make Admin</button></td>}
                                <td><button className="btn btn-sm">Remove User</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Users;