import React, { useEffect, useState } from "react";
const useToken = user => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    const currentUser = {email: email};
    console.log(localStorage.getItem('accessToken'))
    useEffect(()=> {
        if(email) {
            fetch(`https://fathomless-wave-58176.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                const accesToken = data.token;
                localStorage.setItem('accessToken', accesToken);
                setToken(accesToken)
                console.log('success', data)
            })
        }
    },[user])
    return [token]
}
export default useToken;