function evaluaER(expresion,cadena){
    try {
    let expresionRegular = new RegExp(expresion);
    if (cadena.match(expresionRegular)) {
        alert("Coincide");
    } else {
        alert("No coincide");
    }
    } catch (error) {
    alert("Expresión regular inválida.");
    }
}