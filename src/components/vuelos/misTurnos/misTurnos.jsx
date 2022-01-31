import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//  import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponenteDashboard from '../../componenteDashboard/componenteDasboard';
import './misTurnos.css'
import TableTurn from './listGroup';
import { getUserTurnsById } from '../../../redux/actions/index';

export default function MisTurnos() {
    const dispatch = useDispatch();
//  const navigate = useNavigate();
    const userLogin = useSelector((state) => state.userLogin);
    const userTurns = useSelector((state) => state.userTurns);

    async function getTurns() {
        if (userLogin.id) {
            dispatch(getUserTurnsById(userLogin.id));
        }
    }

    useEffect(() => {
        getTurns()
    }, [dispatch]);


    return (
        <div>
            <ComponenteDashboard />
            <div className='tableTurnContainer'>
                {
                    userTurns.length > 0 && userLogin.id ? userTurns.map(el => {
                        return (
                            <TableTurn nombre={userLogin.name} turno={el.nextHours} estado={el.state} aeronave={el.plane} />
                        )
                    }) : <h4>Este usuario no tiene turnos registrados</h4>

                }
            </div>
        </div>
    );
}
