import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function LoadingUser({ status, setIslogin }) {
    const navigate= useNavigate();
    const userLogin = useSelector((state) => state.userLogin)

        if (status) {
            setIslogin(false)
            if (userLogin.hasOwnProperty("id")) {
                navigate('/home')
            } else {
                console.log("no hay poriedad id, entro al else")
            }
        }

    return (
        <div>
            {
                status ? <h4>Loading</h4> : <h4>Credenciales incorrectas</h4>
            }
        </div>
    )
}