import React from 'react';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function PoliticaCookies() {
    return (
        <div>
            <NavBar />
            <div className="containerPilotoPrivado">
                <div className="cardPPA5">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Políticas de cookies
                            </CardTitle>
                            <CardText className="cardText">
                                Esta web utiliza cookies propias y de terceros para ofrecerle una mejor experiencia y servicio. Al navegar o utilizar nuestros servicios acepta el uso que hacemos de las cookies. Sin embargo, tiene la opción de impedir la generación de cookies y la eliminación de las mismas mediante la selección de la correspondiente opción en su Navegador. En caso de bloquear el uso de cookies en su navegador es posible que algunos servicios o funcionalidades de la página Web no estén disponibles.
                            </CardText>
                            <CardTitle tag="h5">
                                ¿Qué son las cookies?
                            </CardTitle>
                            <CardText className="cardText">
                                Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                            </CardText>
                            <CardTitle tag="h5">
                                Cookies que se utilizan en este sitio Web
                            </CardTitle>
                            <CardText className="cardText">
                                En esta web se utilizan cookies <strong>propias y de terceros</strong> para conseguir que tengas una mejor experiencia de navegación, puedas compartir contenido en redes sociales, para mostrarte anuncios en función a tus intereses y para obtener estadísticas de usuarios.
                            </CardText>
                            <CardText className="cardText">
                                Por ello, las cookies empleadas en <strong>https://www.flight-academy.com.ar</strong> se asocian únicamente con un Usuario anónimo y su ordenador, no proporcionan referencias que permitan deducir el nombre y apellidos del Usuario y no pueden leer datos de su disco duro ni incluir virus en sus textos. Asimismo, <strong>https://www.flight-academy.com.ar</strong> no puede leer las cookies implantadas en el disco duro del Usuario desde otros servidores.
                            </CardText>
                            <CardText className="cardText">
                                El usuario puede libremente decidir acerca de la implantación o no en su disco duro de las cookies empleadas en <strong>https://www.flight-academy.com.ar</strong> En este sentido, el usuario puede configurar su navegador para aceptar o rechazar por defecto todas las cookies o para recibir un aviso en pantalla de la recepción de cada cookie y decidir en ese momento su implantación o no en su disco duro. Para ello le sugerimos consultar la sección de ayuda de su navegador para saber cómo cambiar la configuración que actualmente emplea. Aun cuando el Usuario configurase su navegador para rechazar todas las cookies o rechazase expresamente las cookies de <strong>https://www.flight-academy.com.ar</strong> podrás navegar por el Portal con el único inconveniente de no poder disfrutar de las funcionalidades del Portal que requieran la instalación de alguna de ellas. En cualquier caso, el Usuario podrá eliminar las cookies implantadas en su disco duro en cualquier momento, siguiendo el procedimiento establecido en la sección de ayuda de su navegador y que posteriormente detallaremos.
                            </CardText>
                            <CardText className="cardText">
                                Como usuario que eres, puedes rechazar el tratamiento de los datos o la información bloqueando estas cookies mediante la configuración apropiada de tu navegador. Sin embargo, debes saber que, si lo haces, este sitio no funcione adecuadamente.
                            </CardText>
                            <CardText className="cardText">
                                Según los términos incluidos en el artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico, si continúas navegando, <strong>estarás prestando tu consentimiento</strong> para el empleo de las cookies que detallo a continuación.
                            </CardText>
                            <CardTitle tag="h5">
                                Las cookies de esta web ayudan a:
                            </CardTitle>
                            <CardText className="cardText">
                                <ul>
                                    <li>Hacer que esta web funcione correctamente.</li>
                                    <li>Ahorrarle el tener que iniciar sesión cada vez que visitas este sitio.</li>
                                    <li>Recordarte tus ajustes durante y entre las visitas.</li>
                                    <li>Permitirte visualizar videos.</li>
                                    <li>Mejorar la velocidad / seguridad del sitio.</li>
                                    <li>Que pueda compartir páginas con redes sociales.</li>
                                    <li>Mejorar continuamente de este sitio web.</li>
                                    <li>Mostrarte anuncios en función de tus hábitos de navegación.</li>
                                </ul>
                            </CardText>
                            <CardTitle tag="h5">
                                No utilizaré jamás cookies para:
                            </CardTitle>
                            <CardText className="cardText">
                                <ul>
                                    <li>Recoger información de identificación personal (sin tu permiso expreso).</li>
                                    <li>Recoger información sensible (sin tu permiso expreso).</li>
                                    <li>Compartir datos de identificación personal a terceros.</li>
                                </ul>
                            </CardText>
                            <CardTitle tag="h5">
                                ¿Cómo desactivar las cookies?
                            </CardTitle>
                            <CardText className="cardText">
                            Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
                            </CardText>
                            <CardText className="cardText">
                            <p>A continuación puede acceder a la configuración de los navegadores webs más frecuentes para aceptar, instalar o desactivar las cookies:</p>
                            <div>
                                <Link href='https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we&redirectlocale=es' target="_blank" color='inherit'>
                                <p>Firefox</p>
                                </Link>
                                <Link href='https://support.apple.com/es-es/HT201265' target='_blank' color='inherit'>
                                <li>Safari</li>
                                </Link>
                                <li>Google Chrome</li>
                            </div>
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