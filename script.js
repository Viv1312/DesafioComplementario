let temperaturaTotal = 0;
let promedio = 0;

 for (let index = 0; index < 5; index++) {
     let temp = parseFloat(prompt("Por favor ingrese la temperatura nro: " + (index+1)));
     temperaturaTotal += temp;
     
 }
alert("Esta es la suma de las temperaturas: " + temperaturaTotal);

promedio = temperaturaTotal  / 5;

alert("Esta es el promedio de temperaturas: " + promedio);