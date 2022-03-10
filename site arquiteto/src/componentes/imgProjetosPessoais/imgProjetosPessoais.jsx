import './style.css'
import img1 from '../imagens/img1.jpg'
import img2 from '../imagens/img2.jpg'
import img3 from '../imagens/img3.jpg'
import img5 from '../imagens/img5.jpg'

function imgProjetosPessoais(){

    return(
        <div className='row img-projetos-pessoais'>
            <div className="col-md-6">
                <img className='img-fluid' src={img1} alt="" />
            </div>
            <div className="col-md-6">
                <img className='img-fluid' src={img2} alt="" />
            </div>
            <div className="col-md-6">
                <img className='img-fluid' src={img3} alt="" />
            </div>
            <div className="col-md-6">
                <img className='img-fluid' src={img5} alt="" />
            </div>
        </div>
    )
}


export default imgProjetosPessoais;