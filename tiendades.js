function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
function onclickButtonPriceDiscount(){
   const inputPrice = document.getElementById("InputPrice");
   const priceValue = inputPrice.value;  // anterior mente cuando corria el programa me marcaba un error como NaN
                                         // Esto se debe a que no escribí bien la pabra (inputPrice.Value) la forma correcta es (inputPrice.value) value es en minuscula al inicio.                      
   const inputDiscount = document.getElementById("InputDiscount");
   const discountValue = inputDiscount.value;
   //alert(precioConDescuento);
   const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
   const resultP = document.getElementById("ResultP");
   resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
