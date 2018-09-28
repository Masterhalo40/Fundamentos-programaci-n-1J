var btnSumar = document.querySelector('#sumar');
btnSumar.addEventListener('click', sumar);

var btnRestar = document.querySelector('#restar');
btnRestar.addEventListener('click', restar);

var btnMultiplicar = document.querySelector('#multiplicar');
btnMultiplicar.addEventListener('click', multiplicar);

var btnDividir = document.querySelector('#dividir');
btnDividir.addEventListener('click', dividir);

var btnResiduo = document.querySelector('#residuo');
btnResiduo.addEventListener('click', residuo);


function sumar() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) + Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');

    inputResultado.value = resultado;
}

function restar() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) - Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');

    inputResultado.value = resultado;
}

function multiplicar() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) * Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');

    inputResultado.value = resultado;
}

function dividir() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) / Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');

    inputResultado.value = resultado;
}

function residuo() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) % Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');

    inputResultado.value = resultado;
}