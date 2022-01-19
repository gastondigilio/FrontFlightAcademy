import React from 'react';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import { UncontrolledCarousel } from 'reactstrap';
import fotoModificada1 from '../../images/fotoModificada1.png';
import foto2 from '../../images/foto2.png';
import foto3 from '../../images/foto3.png';
import etvi3 from '../../images/etvi3.jpg';
import toma from '../../images/toma.jpg';
import './galeria.css';

export default function Galeria() {
    return (
        <div>
            <NavBar />
            <div className="containerGaleria">
                <div className="containerCarousel">
                    <div className="imagenGaleria">
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
                                    src: etvi3
                                },
                                {
                                    key: 5,
                                    src: toma
                                }
                            ]}
                        />
                    </div>
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