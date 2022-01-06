import React from 'react';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import { UncontrolledCarousel } from 'reactstrap';
import fotoModificada1 from '../../images/fotoModificada1.png';
import foto2 from '../../images/foto2.png';
import foto3 from '../../images/foto3.png';
import foto4 from '../../images/foto4.png';
import foto6 from '../../images/foto6.png';
import './galeria.css';

export default function Galeria() {
    return (
        <div>
            <NavBar />
            <div className="containerGaleria">
                <div className="containerCarousel">
                    <UncontrolledCarousel
                        items={[
                            {

                                key: 1,
                                src: fotoModificada1
                            },
                            {

                                key: 2,
                                src: foto2
                            },
                            {

                                key: 3,
                                src: foto3
                            },
                            {
                                key: 4,
                                src: foto4
                            },
                            {
                                key: 5,
                                src: foto6
                            }
                        ]}
                    />
                </div>
            </div>
            <Link to="/">
                <button className='botonVolverCursos'>
                    Volver
                </button>
            </Link>
            <Footer />
        </div>
    )
}