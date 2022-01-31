import React from "react";
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import { Card, CardBody, CardTitle, CardText/*,CardSubtitle */ } from 'reactstrap';
import { Link } from 'react-router-dom'

export default function AvisoLegal() {
    return (
        <div>
            <NavBar />
            <div className="containerPilotoPrivado">
                <div className="cardPPA5">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h4">
                                Aviso legal
                            </CardTitle>
                            <CardTitle tag="h5" align="left">
                                Información relevante
                            </CardTitle>
                            <CardText className="cardText">
                                Es requisito necesario para el uso de este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento.
                            </CardText>
                            <CardTitle tag="h5" align="left">
                                Licencia
                            </CardTitle>
                            <CardText className="cardText">
                                Flight Academy  a través de su sitio web concede una licencia para que los usuarios utilicen este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.
                            </CardText>
                            <CardTitle tag="h5" align="left">
                                Uso no autorizado
                            </CardTitle>
                            <CardText className="cardText">
                                El usuario se compromete a utilizar este sitio web únicamente de forma lícita. Está prohibido cualquier tipo de uso no autorizado del sitio, como por ejemplo, acceso indebido a información privada y ataques informáticos, entre otros.
                            </CardText>
                            <CardTitle tag="h5" align="left">
                                Propiedad
                            </CardTitle>
                            <CardText className="cardText">
                                Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros servicios, modificado o sin modificar. Todos los productos son propiedad  de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros productos se proporcionan  sin ningún tipo de garantía, expresa o implícita. En ningún esta compañía será  responsables de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos.
                            </CardText>
                            <CardTitle tag="h5" align="left">
                                Privacidad
                            </CardTitle>
                            <CardText className="cardText">
                                Este fcaviacion.com.ar garantiza que la información personal que usted envía cuenta con la seguridad necesaria. Los datos ingresados por usuario no serán entregados a terceros, salvo que deba ser revelada en cumplimiento a una orden judicial o requerimientos legales.
                            </CardText>
                            <CardText className="cardText">
                                La suscripción a boletines de correos electrónicos publicitarios es voluntaria y podría ser seleccionada al momento de crear su cuenta.
                            </CardText>
                            <CardText className="cardText">
                                Flight Academy reserva los derechos de cambiar o de modificar estos términos sin previo aviso.
                            </CardText>
                        </CardBody>
                    </Card>
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