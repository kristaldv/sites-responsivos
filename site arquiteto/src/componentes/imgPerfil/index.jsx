import './style.css'
import perfil from '../imagens/foto.png'
function imgPerfil(){

    return (
        <div className='col-md-6 img-perfil'>
            <img className='img-fluid img-perfil-principal' src={perfil}alt="imagens autor" />
            
        </div>

    )

}

export default imgPerfil;