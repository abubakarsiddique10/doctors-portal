import React, { useEffect, useState } from "react";
const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    const email = user.email;
    useEffect(()=> {
        if(email) {
            fetch(`https://fathomless-wave-58176.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setAdmin(data.isAdmin);
                setAdminLoading(false);
            })
        }
    },[user])
    return [admin, adminLoading];
}
export default useAdmin;