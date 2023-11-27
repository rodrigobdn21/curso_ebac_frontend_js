const form = document.getElementById('form-comparacao');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroTotalA = Number(document.getElementById('numero-a').value);
    const numeroTotalB = Number(document.getElementById('numero-b').value);
    let formEValido = false;
    const mensagemSucesso = `O valor de B (<b>${numeroTotalB}</b>) é maior que o valor de A (<b>${numeroTotalA}</b>)`;
    const mensagemError = `O valor de B (<b>${numeroTotalB}</b>) é menor que o valor de A (<b>${numeroTotalA}</b>)`;

    function validaNumero(numeroTotalA, numeroTotalB){
        return numeroTotalA < numeroTotalB;
    }

    formEValido = validaNumero(numeroTotalA, numeroTotalB);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemError.style.display = 'none';
        
    }
    else {
        const containerMensagemError = document.querySelector('.error-message');
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';

    }
});