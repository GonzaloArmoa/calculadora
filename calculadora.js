const sumar = function(a,b) {
    return a + b
}

const restar = function(a,b){
    return a - b;
}

const multiplicar = function(a,b){
    return a * b;
}

const division = function(a,b){
    return a / b;
}

module.exports = {
    sumar : sumar,
//clave : valor,

    restar : restar,
    // Javascrip entiende que si el valor es igual a la propiedad de coincide con el nombre de la variable entonces el nombre de la propiedad
    multiplicar,
    division,
}