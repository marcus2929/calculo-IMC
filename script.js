function calculate(){

var height=document.getElementById('height').value;
var weight=document.getElementById('weight').value;
console.log(height);
console.log(weight);

var imc = weight/height**2;
imc = imc.toFixed(2);
console.log(imc);

var text="";
if (imc < 18.5){    text="IMC: " + imc + " Magreza";}

else if (imc > 18.5 && imc < 25){   text="IMC: "+ imc + " Peso normal";}

else if (imc > 25 && imc < 29.9){   text="IMC: "+ imc + " Excesso de peso"}

else if(imc > 30 && imc < 34.9){    text="IMC: "+ imc + " Obesidade"}

else if(imc > 35 && imc < 39.9){    text="IMC: "+ imc + " Obesidade II"}

else if(imc > 40){  text="IMC: "+ imc + " Obesidade III"}

document.getElementById("textarea").innerText=text;




}







