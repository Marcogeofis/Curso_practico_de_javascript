const lista1 = [
    100,
    200,
    500,
    400000000,
];

function calcularMediaArimetrica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    ); // metodo reduce nos permite hacer la suma de nuestros elementos de nuestro array
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }

function calcularMedianaAritmetica(list){
    list.sort((a,b)=>a-b);
    
    function esPar(numero){
        if (numero % 2 === 0){
            return true;
        }else {
            return false;
        }
}

const mitadLista1 = parseInt(list.length /2);

let mediana;
if (esPar(list.length)){
    const elemento1 = list[mitadLista1 - 1];
    const elemento2 = list[mitadLista1];

    const promedioElemento1y2 = calcularMediaArimetrica([
        elemento1,
        elemento2,
    ]);
    mediana = promedioElemento1y2;
}else{
    mediana = list[mitadLista1];
}
 return mediana;
}

//ordenando un array
//este ejercicio no tiene una funcionde comparación
//const numbers = [40, 1 , 5, 200];
//numbers.sort();

//usando una funcion de comparacion
//const numbers = [40, 1 , 5, 200];
//function comparar(a, b){
//    return a - b ;
//}
//Array.sort(comparar);

//lo mismo pero usando una funcion anónima normal
//const numbers = [40, 1 , 5, 200];
//numbers.sort(function(a,b){return a - b;});

// Lo mismo escrito más compacto mediante una función flecha:
//const numbers = [40, 1 , 5, 200];
//numbers.sort((a,b)=>a-b);

