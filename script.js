
function imc(){
 peso = document.getElementById('peso').value
 altura = document.getElementById('altura').value
 resultado =  parseFloat(peso) / (parseFloat(altura)*parseFloat(altura))  
 document.getElementById('resultado').value = resultado
}
    