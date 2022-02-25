// Função do botao da pagina de login (area do aluno)
function validar(){
    let usuario = document.getElementById('email').value
    let senha = document.getElementById('senha').value
   
    if(usuario === 'admin' && senha === 'admin'){
       window.location = 'aluno.html'
    }else{
        alert('dados invalidos')
    }
    

}

// Entrar pressionando a tecla enter 
document.addEventListener('keydown', function(e) {
    if(e.key == "Enter"){
      document.getElementById("enter").click();
    }
});

// Alerta na page de contato / validação dos dados
function enviar(){
    let nome = document.getElementById('nome').value
    let gmail = document.getElementById('gmail').value
    let contato = document.getElementById('contato').value
    let mensagem = document.getElementById('mensagem').value

    if(nome == '' && gmail == '' && contato == '' && mensagem ==''){
        $('#popup').modal('show');
       
        let h5 = document.getElementById('titulo')
        h5.innerHTML= '<span style="color: red;">Erro!</span>'
        let sms = document.getElementById('sms')
        sms.innerHTML = 'Opps! Algum campo não foi preenchido!'
        let btn = document.getElementById('voltar')
        btn.innerHTML = '<span>Voltar</span>'
        btn.className ='btn btn-danger'
    } else{
        $('#popup').modal('show');
        let h5 = document.getElementById('titulo')
        h5.innerHTML= '<span style="color: green;">Mensagem enviada!</span>'
        let sms = document.getElementById('sms')
        sms.innerHTML = 'Sua mensagem foi enviada! <br> Entraremos em contato em até 24h!'
        let btn = document.getElementById('voltar')
        btn.innerHTML = '<span>Voltar</span>'
        btn.className ='btn btn-success'


    }
    
   
}
// Recarregar pagina atraves do botao do modal, após enviar mensagem
function recarregar(){
    let btnRecarregar = document.getElementById('voltar')

    btnRecarregar = window.location.reload(true)
}



