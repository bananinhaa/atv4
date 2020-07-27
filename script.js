
function imc(){
 peso = document.getElementById('peso').value
 altura = document.getElementById('altura').value
 resultado =  parseFloat(peso) / (parseFloat(altura)*parseFloat(altura))  
 document.getElementById('resultado').value = resultado 

 if (peso == "") {
    document.getElementById('erro').innerHTML="<div class='erro' id='erro'>Preencha de forma adequada</div>"
 }
 if (altura == "") {
    document.getElementById('erro').innerHTML="<div class='erro' id='erro'>Preencha de forma adequada</div>"
 }
}

    
