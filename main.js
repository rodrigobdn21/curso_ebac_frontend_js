const form = document.getElementById('form-comparacao');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroTotalA = parseFloat (document.getElementById('numero-a').value);
    const numeroTotalB = parseFloat (document.getElementById('numero-b').value);
    let formEValido = false;
    const mensagemSucesso = `O valor de B (<b>${numeroTotalB.value}</b>) é maior que o valor de A (<b>${numeroTotalA.value}</b>)`;
    const mensagemError = `O valor de B (<b>${numeroTotalB.value}</b>) é menor que o valor de A (<b>${numeroTotalA.value}</b>)`;

    function validaNumero(numeroTotalA, numeroTotalB){
        return numeroTotalA < numeroTotalB;
    }

    formEValido = validaNumero(numeroTotalA, numeroTotalB);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

    }
    else {
        const containerMensagemError = document.querySelector('.error-message');
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';

    }
});