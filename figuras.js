//código del cuadrado 
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perímetro del cuadrado es:" + perimetroCuadrado + "cm");//
function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El área del cuadrado es:" + areaCuadrado + "cm");//
console.groupEnd();

// código del triangulo
console.group("Triángulo");
//const ladotriangulo1 = 6;
//const ladotriangulo2 = 6;
//const basetriangulo3 = 4;
//const alturaTriangulo = 5.5;
//console.log("Los lados del triángulo miden:" 
//+ ladotriangulo1 
//+ "cm, " 
//+ ladotriangulo2 
//+ "cm, " 
//+ basetriangulo3 
//+ "cm, "
//+ alturaTriangulo
//+ "cm"
//);
function perimetroTriangulo(lado1,lado2,base) {
    lado1 = parseInt(lado1);  // Con el comando parseInt transformamos un valor ingrasado de string a number para poder hacer suma.
    lado2 = parseInt(lado2);
    base = parseInt(base);
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triángulos es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
//console.log("El área del triángulos es: " + areaTriangulo + "cm"); 
function alturaTriangulo (lado1, base) {
    return Math.sqrt(lado1**2-(base**2/4));
}
console.groupEnd();

// código de circulo
console.group("Círculo");
// radio
//const radioCirculo = 4;
//console.log ("El radio del Círculo es: " + radioCirculo + "cm");
// diámetro

function diametroCirculo(radio){
    return radio * 2;
} 
//console.log ("El Diámetro del Círculo es: " + diametroCirculo + "cm");
// PI
const PI = Math.PI;
//console.log ("El valor de PI es: " + PI);
//Circuferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
//console.log ("El perimetro del Círculo es: " + perimetroCirculo + "cm");
// area del círculo
function areaCirculo(radio){
    return (radio * radio) * PI;
} 
//console.log ("El  area del Círculo es: " + areaCirculo + "cm2");
//console.groupEnd();

// Aquí interactuamos con html
// funcion del cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Aquí trabajaremos las funciones del círculo

function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro + "cm");
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo"); 
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro + "cm");
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area + "cm");
}

// Aquí empieza la funciones del triángulo

function calcularPerimetroTriangulo(){
    const inputLadoA = document.getElementById("InputLadoATriangulo");
    const inputLadoB = document.getElementById("InputLadoBTriangulo");
    const inputBase = document.getElementById("InputBaseTriangulo");

    const ladoAvalue = inputLadoA.value;
    const ladoBvalue = inputLadoB.value;
    const basevalue = inputBase.value;

    const perimetro = perimetroTriangulo(ladoAvalue,ladoBvalue,basevalue);
    alert(perimetro + "cm");
}
function calcularAlturaTriangulo(){
    const inputLadoA = document.getElementById("InputLadoATriangulo");
    const inputLadoB = document.getElementById("InputLadoBTriangulo");
    const inputBase = document.getElementById("InputBaseTriangulo");
    
    const ladoAvalue = inputLadoA.value;
    const ladoBvalue = inputLadoB.value;
    const basevalue = inputBase.value;

    if (ladoAvalue !== ladoBvalue){
        alert("los lados para el triangulo isósceles deben ser iguales excepto la base");
    }else{
        altura = alturaTriangulo(ladoAvalue, basevalue);
        alert(altura + "cm");
    }
}
function calcularAreaTriangulo(){
    const inputLadoA = document.getElementById("InputLadoATriangulo");
    const inputLadoB = document.getElementById("InputLadoBTriangulo");
    const inputBase = document.getElementById("InputBaseTriangulo");
    
    const ladoAvalue = inputLadoA.value;
    const ladoBvalue = inputLadoB.value;
    const basevalue = inputBase.value;

    if (ladoAvalue !== ladoBvalue){
        alert("los lados para el triangulo isósceles deben ser iguales excepto la base");
    }else{
        altura = alturaTriangulo(ladoAvalue, basevalue);
        area = areaTriangulo (basevalue, altura);
        alert(area + "cm");
    }
}












