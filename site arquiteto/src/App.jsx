import './App.css'
import './settings/colors/colors.css'
import imgPerfil from './componentes/imgPerfil';
import imgProjetosPessoais from './componentes/imgProjetosPessoais/imgProjetosPessoais';
import logoPrincipal from './componentes/logoPrincipal';
import todosDireitos from './componentes/rodape/rodape';


function ola (){
  return (
      <div className="container ">
        <section className='section-inicial'>
          <div className='row'>
              {logoPrincipal()}
              {imgPerfil()}
          </div>
          <div>
            <h1 className='h1-projetos-pessoais'>Projetos Pessoais</h1>
            <div className='padding-div-projetos-pessoais'>
               {imgProjetosPessoais()}
            </div>
          </div>
        </section>
          <footer>
            {todosDireitos()}
          </footer>
      </div>
      
    )
}

export default ola;

