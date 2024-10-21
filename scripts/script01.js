// Ejercicio 1: Verificar si un número es par o impar
function esPar() {
    var numero = document.getElementById("numero1").value;
    var resultado = (numero % 2 == 0) ? "Es par" : "Es impar";
    document.getElementById("resultado1").innerText = resultado;
}

// Ejercicio 2: Mostrar la tabla de multiplicar de un número
function mostrarTabla() {
    var numero = document.getElementById("numero2").value;
    var tabla = "";
    for (var i = 1; i <= 10; i++) {
        tabla += "<li>" + numero + " x " + i + " = " + (numero * i) + "</li>";
    }
    document.getElementById("tabla").innerHTML = tabla;
}

// Ejercicio 3: Realizar el producto de dos números mediante sumas
function producto() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = 0;
    for (var i = 0; i < num2; i++) {
        resultado += num1;
    }
    document.getElementById("resultado3").innerText = "Producto: " + resultado;
}

// Ejercicio 4: Leer n números y mostrar la posición del mayor valor
function mostrarMayor() {
    var numeros = document.getElementById("numeros4").value.split(',').map(Number);
    var mayor = Math.max(...numeros);
    var posicion = numeros.indexOf(mayor);
    document.getElementById("resultado4").innerText = "Mayor: " + mayor + " en posición " + posicion;
}

// Ejercicio 5: Sumar elementos de dos vectores
function sumarVectores() {
    var A = document.getElementById("vectorA").value.split(',').map(Number);
    var B = document.getElementById("vectorB").value.split(',').map(Number);
    var C = A.map((num, i) => num + B[i]);
    document.getElementById("resultado5").innerText = "Vector C: " + C;
}

// Ejercicio 6: Calcular la media de una secuencia de números
function calcularMedia() {
    var numeros = document.getElementById("numeros6").value.split(',').map(Number);
    var suma = numeros.reduce((acc, val) => acc + val, 0);
    var media = suma / numeros.length;
    document.getElementById("resultado6").innerText = "Media: " + media;
}

// Ejercicio 7: Mostrar números en orden
function ordenarNumeros() {
    var numeros = document.getElementById("numeros7").value.split(',').map(Number);
    numeros.sort((a, b) => a - b);
    document.getElementById("resultado7").innerText = "Números ordenados: " + numeros;
}

// Ejercicio 8: Procesar secuencia de textos
function procesarTextos() {
    var textos = document.getElementById("textos8").value.split(',');
    var resultado = "";
    textos.forEach(texto => {
        resultado += `<li>Texto: ${texto}, Longitud: ${texto.length}, Mayúsculas: ${texto.toUpperCase()}, Minúsculas: ${texto.toLowerCase()}</li>`;
    });
    document.getElementById("resultado8").innerHTML = resultado;
}