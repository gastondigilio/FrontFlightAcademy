import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../../home/Title';
import './aeronaves.css';

function preventDefault(event) {
    event.preventDefault();
}



export default function Aeronaves({ }) {
    return (
        <React.Fragment>
            <Title>Aeronaves</Title>
            <div className="aeronavesContainer">
                <Link color="primary" href="/agregar-aeronave">
                    <Typography component="p" variant="h6">
                        Agregar Aeronave
                    </Typography>
                </Link>
            </div>
            <div className="aeronavesContainer">
            <Link color="primary" href="" onClick={preventDefault}>
                    <Typography component="p" variant="h6">
                        Modificar Aeronave
                    </Typography>
                </Link>
            </div>
            <div className="aeronavesContainer">
            <Link color="primary" href="/eliminar-aeronave">
                    <Typography component="p" variant="h6">
                        Eliminar Aeronave
                    </Typography>
                </Link>
            </div>
        </React.Fragment>
    );
}