const form = document.getElementById('form-number');
const btn = document.querySelector('#validar');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.querySelector('#number-a');
    const campoB = document.querySelector('#number-b')
    const mensagemPossitiva = `O valor do número B <b>${campoB.value}</b> é maior que o valor do número A <b>${campoA.value}</b>.`
    const menssagemError = `O valor do número A <b>${campoA.value}</b> é maior que o valor do número B <b>${campoB.value}</b>. Por favor, altere o valor de A`
    const containerError = document.querySelector('#error-message');
    const containerSuccess = document.querySelector('#success-message')
if ((campoB.value)>(campoA.value)) {
    containerSuccess.innerHTML = mensagemPossitiva
    containerSuccess.style.display = 'block'


    campoA.value = ''
    campoB.value = ''
    containerError.style.display = 'none'
} else {
    containerSuccess.style.display = 'none'
    containerError.innerHTML = menssagemError
    containerError.style.display = 'block'
}

})

console.log()