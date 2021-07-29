// código del cuadrado 
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es:" + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es:" + areaCuadrado + "cm");
console.groupEnd();

// código del triangulo
console.group("Triángulo");
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo3 = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden:" 
+ ladotriangulo1 
+ "cm, " 
+ ladotriangulo2 
+ "cm, " 
+ basetriangulo3 
+ "cm, "
+ alturaTriangulo
+ "cm"
);
const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo3;
console.log("El perimetro del triángulos es: " + perimetroTriangulo + "cm");

const areaTriangulo = (basetriangulo3 * alturaTriangulo) / 2;
console.log("El área del triángulos es: " + areaTriangulo + "cm"); 

console.groupEnd();

// código de circulo
console.group("Círculo");
// radio
const radioCirculo = 4;
console.log ("El radio del Círculo es: " + radioCirculo + "cm");
// diámetro
const diametroCirculo = radioCirculo * 2
console.log ("El Diámetro del Círculo es: " + diametroCirculo + "cm");
// PI
const PI = Math.PI;
console.log ("El valor de PI es: " + PI);
//Circuferencia
const perimetroCirculo = diametroCirculo * PI;
console.log ("El perimetro del Círculo es: " + perimetroCirculo + "cm");
// area del círculo
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log ("El  area del Círculo es: " + areaCirculo + "cm2");
console.groupEnd();

