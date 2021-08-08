//Helpers
function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaArimetrica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    ); // metodo reduce nos permite hacer la suma de nuestros elementos de nuestro array
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1 ];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaArimetrica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


//Mediana General
const salariosCol = colombia.map(
    function (personita) {
        return personita.salario;
    }
);
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


const medianaGeneralCol = medianaSalarios(salariosColSorted);


const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;


const salariosColTop = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);       // el metodo "splice()" Este metodo recive dos argumentos
// Mediana de Top 10%

const medianaTop10Col = medianaSalarios(salariosColTop);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
}  
);