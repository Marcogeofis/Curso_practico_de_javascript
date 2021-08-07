// Se creara una funcion para calcular el promedio
// para calcular el promedio se usa la ecuación 
// es la suma de una serie de elementos divido entre el numero de elementos de la serie 

const lista1 = [
    100,
    200,
    300,
    500,
];

function calcularMediaArimetrica(lista) {
//    let sumaLista = 0;
//
//    for (let i = 0; i < lista.length; i++){
//        sumaLista = sumaLista + lista[i];
//    }

    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    ); // metodo reduce nos permite hacer la suma de nuestros elementos de nuestro array

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}