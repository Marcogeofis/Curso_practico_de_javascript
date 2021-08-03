// Haremos las funciones donde calcularemos el precio con su descuento de un producto
// const precioOriginal = 120;
// const descuento = 80;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
function onclickButtonPriceDiscount(){
    const inputPrice = document.getElementById("Inputprice");
    const priceValue = inputPrice.Value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.Value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

// console.log({
    //   precioOriginal,
    //   descuento,
    //   porcentajePrecioConDescuento,
    //   precioConDescuento,
    // });