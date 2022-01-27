import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem, Button } from "reactstrap"

export default function TableTurn({ nombre, aeronave, estado, turno }) {
    return (
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <div>
                <h4>Aeronave</h4>
                <h4>Turno</h4>
                <h4>Piloto</h4>
                <h4>Estado</h4>
            </div>
            <ListGroup>
                <ListGroupItem>{nombre}</ListGroupItem>
                <ListGroupItem>{turno}</ListGroupItem>
                <ListGroupItem>{aeronave}</ListGroupItem>
                <ListGroupItem>{estado}</ListGroupItem>
                <Button
                    color="success"
                    outline
                >
                    Aprobar
                </Button>
                <Button
                    color="danger"
                    outline
                >
                    Cancelar
                </Button>
            </ListGroup>
        </div>
    );
}