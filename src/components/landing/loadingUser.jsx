import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function LoadingUser({ status, setIslogin }) {
    const history = useHistory();
    const userLogin = useSelector((state) => state.userLogin)

    setTimeout(() => {
        if (status) {
            setIslogin(false)
            console.log(userLogin, "user login ")
            if (userLogin.hasOwnProperty("id")) {
                history.push("/home")
                console.log("se logeo")
            } else {
                console.log("entro al else")
            }
        }
    }, 2000);

    return (
        <div>
            {
                status ? <h4>Loading</h4> : <h4>Credenciales incorrectas</h4>
            }
        </div>
    )
}