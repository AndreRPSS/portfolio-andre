// VALIDAÇÃO FORMULÁRIO
const form = document.getElementById("form"); //INDICAR O FORMULÁRIO
const campo = document.getElementsByClassName("campo"); //INDICA O CAMPO
const erro = document.getElementsByClassName("erro"); //MENSAGEM DE ERRO
const emailRegex = /^\w+([-+.]\w+)*@\w+([-.']\w+)*\.\w+([-.]\w+)*$/; //VALIDACAO EMAIL

form.addEventListener('submit',(evento) =>{ //VEIFICAÇÃO DAS VALIDAÇÕES PARA ENVIO
    evento.preventDefault(); //PARA O ENVIO
    validacaoNome(); //VERIFICA A VALIDADAÇÃO
    validacaoEmail(); //VERIFICA A VALIDADAÇÃO
    validacaoMensagem(); //VERIFICA A VALIDADAÇÃO
    alert("Formulário enviado com sucesso! Nos vemos em breve!"); //MENSAGEM PARA SIMULAR O ENVIO DO FORMULÁRIO
    location.reload(); // RECARREGA A PÁGINA
    window.scrollTo(0, 0);//VOLTA PARA INÍCIO
    
})

function error(index){ //MODIFICAÇÃO QUANDO OS REQUISITOS NÃO FOREM ATINGIDOS
    campo[index].style.border = "3.5px solid red"; //BORDA VERMELHA
    erro[index].style.display = "block"; //MOSTRA O TEXTO
}
function removeError(index){//REMOVE A MODIFICAÇÃO DE ERRO
    campo[index].style.border = ""; //BORDA PADRÃO
    erro[index].style.display = "none"; //REMOVE O TEXTO

}


function validacaoNome(){ //VALIDAÇÃO DO NOME
    if(campo[0].value.length < 3){ //O NOME PRECISA TER NO MÍNIMO 3 CARACTERES
        error(0); //CHAMA A ALTERAÇÃO DE ERRO AO CAMPO NOME
    }
    else{ //CASO TENHA MAIS DE 3 CARACTERES
        removeError(0); //REMOVE A ALTERAÇÃO DE ERRO
    }
}

function validacaoEmail(){ //VALIDAÇÃO DO EMAIL
    if(!(emailRegex.test(campo[1].value))){ //O EMAIL PRECISA SEGUIR O PADRÃO
        error(1); //CHAMA A ALTERAÇÃO DE ERRO AO CAMPO EMAIL
    }
    else{ //CASO PASSE NO TESTE
        removeError(1); //REMOVE A ALTERAÇÃO DE ERRO
    }
}

function validacaoMensagem(){ //VALIDAÇÃO DO NOME
    if(campo[3].value.length < 10){ //A MENSAGEM PRECISA TER NO MÍNIMO 10 CARACTERES
        error(3); //CHAMA A ALTERAÇÃO DE ERRO AO CAMPO MENSAGEM
    }
    else{ //CASO TENHA MAIS DE 10 CARACTERES
        removeError(3); //REMOVE A ALTERAÇÃO DE ERRO
    }
}