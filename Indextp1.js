//Programa que muestra en pantalla la frase "Hello World"
alert("Hello World")

//programa de una sola línea que diga "Hello World"
document.write("Hello World")

//programa que escriba en pantalla 3+5
 let numero1 = 3
 let numero2 = 5
 var suma = num1 + num2
 document.write(suma)

 //programa de dos líneas que pida nombre de usuario y diga "Hola nombreUsuario"
 var usuario = prompt ("Ingrese su usuario : ")
  console.log( "Bienvenido: " + usuario)

  //programa que pida pida dos numeros y escriba el resultado de su suma
  var num1 = Number(prompt ("Ingrese el numero 1: "))
  var num2 = Number(prompt ("Ingrese el numero 2: "))
  var suma = num1 + num2
  document.write("El resultado de la suma es: " + suma)

  //programa de dos numeros que muestre en pantalla cual es mayor
  let num3;
   if (nro3 < 10){
     console.log("el", nro3, "es mayor que 10")
   }

   //programa de tres numeros que muestre en pantalla cual es el mayor de los tres

   const nro1 = parseFloat(prompt("Ingresa el primer número: "));
   const nro2 = parseFloat(prompt("Ingresa el segundo número: "));
   const nro3 = parseFloat(prompt("Ingresa el tercer número: "));
   
   let mayor;
   
   if (nro1 >= nro2 && nro1 >= nro3) {
       mayor = nro1;
   } else if (nro2 >= nro1 && nro2 >= nro3) {
       mayor = nro2;
   } else {
       mayor = nro3;
   }
   document.write("El número mayor es: " + mayor)

   

   //programa que pida un numero y diga si es divisible por 2

   const numer = parseInt(prompt("Ingresa un número:"));

  if (numer % 2 === 0) {
    alert(`${numer} es divisible por 2.`);
  } else {
    alert(`${numer} no es divisible por 2.`);
  }


   //programa que pida un numero y diga si es par o impar

   const number = parseInt(prompt("Ingresa un número:"));

   if (isNaN(number)) {
    alert("Por favor, ingresa un número válido.");
   } else if (number % 2 === 0) {
    alert(`${number} es un número par.`);
   } else {
    alert(`${number} es un número impar.`);
   }

   //programa que pida una nota nurérica y diga si el alumno ha aprobado
   
  
   if(nota >=4){
     calificacion = "Desaprobado"
    }else if( nota >=4 && nota <9){
      calificacion = "Aprobado"
     }else if(nota >= 9){
     calificacion = "Sobresaliente"
    }
     console.log("<br> Tu calificación fue : " , calificacion)


   //programa que pida un numero del 1 al 12 y muestre en pantalla el mes que corresponde

   let mes = parseInt(prompt("Introduce un número del 1 al 12"));
   switch(dia) {
       case 1: document.write("Enero"); break;
       case 2: document.write("Febrero"); break;
       case 3: document.write("Marzo"); break;
       case 4: document.write("Abril"); break;
       case 5: document.write("Mayo"); break;
       case 6: document.write("Junio"); break;
       case 7: document.write("Julio"); break;
       case 8: document.write("Agosto"); break;
       case 9: document.write("Septiembre"); break;
       case 10: document.write("Octubre"); break;
       case 11: document.write("Noviembre"); break;
       case 12: document.write("Diciembre"); break;
       default: document.write("Número inválido");
   }


   //programa que pida un numero de 1 al 7 y muestre el dia de la semana
    
    let dia = parseInt(prompt("Introduce un número del 1 al 7"));
    switch(dia) {
        case 1: document.write("Lunes"); break;
        case 2: document.write("Martes"); break;
        case 3: document.write("Miércoles"); break;
        case 4: document.write("Jueves"); break;
        case 5: document.write("Viernes"); break;
        case 6: document.write("Sábado"); break;
        case 7: document.write("Domingo"); break;
        default: document.write("Número fuera de rango");
    }



