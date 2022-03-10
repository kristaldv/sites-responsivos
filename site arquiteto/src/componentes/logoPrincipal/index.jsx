import './style.css'
import logo from '../imagens/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'


function logoPrincipal(){
    return (
        <div className='col-md-6 logo-principal'>
            <img className='img-fluid img-logo-principal' src={logo} alt="logo" />
            <div className='contato'>
                <p>CONTATO: </p>
                <a href="#" >
                    <FontAwesomeIcon icon={faInstagram} className='fa-3x '></FontAwesomeIcon>
                </a> 
                <a href="#" >
                    <FontAwesomeIcon icon={faWhatsapp} className='fa-3x'></FontAwesomeIcon>
                </a>
            </div>
        </div>
    )



}

export default logoPrincipal;