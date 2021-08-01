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
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triángulos es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
//console.log("El área del triángulos es: " + areaTriangulo + "cm"); 
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

if (lado1 !== lado2 ){
    alert("los lados para el triangulo isoceles deben ser iguales excepto la base");
}else{
    /*se hace la ecuación para obtener el perimetro del triángulo*/ 
}











