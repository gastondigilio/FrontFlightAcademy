import './landing.css'
import React from 'react';
import { InputGroup, Input, Button, Media, ButtonGroup, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, UncontrolledCarousel } from 'reactstrap';
import Login from './login';

export default function Landing() {
    return (
        <div className="contenedorLanding">
            <div>
                {/* <div className="probando"> */}
                <Login />
                {/* </div> */}
                <UncontrolledCarousel
                    items={[
                        {
                            
                            key: 1,
                            src: 'https://picsum.photos/id/123/1200/600'
                        },
                        {
                            
                            key: 2,
                            src: 'https://picsum.photos/id/456/1200/600'
                        },
                        {
                            
                            key: 3,
                            src: 'https://picsum.photos/id/678/1200/600'
                        }
                    ]}
                />
            {/* <div className="contenedorTitulo">
                <h4>Estoy volando...</h4>
            </div> */}
            </div>
        </div>
    )
}