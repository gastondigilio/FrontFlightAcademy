import './landing.css'
import React from 'react';
import { InputGroup, Input, Button, Media, ButtonGroup, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, UncontrolledCarousel } from 'reactstrap';
import Login from './login';
import fotoModificada1 from '../../images/fotoModificada1.png';
import foto2 from '../../images/foto2.png';
import foto3 from '../../images/foto3.png';
import foto4 from '../../images/foto4.png';

export default function Landing() {
    return (
        <div className="contenedorLanding">
            <div>
                {/* <div className="probando"> */}
                <Login />
                {/* </div> */}
                <div className="images">
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
                        }
                    ]}
                />
                </div>
            {/* <div className="contenedorTitulo">
                <h4>Estoy volando...</h4>
            </div> */}
            </div>
        </div>
    )
}