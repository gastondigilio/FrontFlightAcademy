import React from 'react';

export default function LoadingUser({ status }) {
    return (
        <div>
            {
                status ? <h4>Loading</h4> : <h4>Credenciales incorrectas</h4>
            }
        </div>
    )
}
