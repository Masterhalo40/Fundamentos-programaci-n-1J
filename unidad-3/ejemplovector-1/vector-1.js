var btnuno = document.querySelector('#btnuno');
btnuno.addEventListener('click', ejemplo1);

var numero = document.querySelector('#numero');

var resultado = document.querySelector('#resultado');

function ejemplo1() {
    var t = Number(numero.value);

   var v1 = [];
            
   for(var i = 0; i < t; i++) {
               var n = prompt('Escribe un número: ');
               v1 [i] = n;
            }

            for(i = 0; i < v1.length; i++) {
                var row = resultado.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = i;
                cell2.innerHTML = v1[i];
            }

            v1.forEach(function(valor){
                row = resultado.insertRow(-1);
                cell1 = row.insertCell(0);
                cell1.innerHTML = valor;
            });
            console.log(v1);
        }

        /*A la hora de poner la variable en la posición, para las letras SIEMPRE se ponen en comillas ('A')*/