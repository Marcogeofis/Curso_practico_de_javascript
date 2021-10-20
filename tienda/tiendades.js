function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
//function onclickButtonPriceDiscount(){
//   const inputPrice = document.getElementById("InputPrice");
//   const priceValue = inputPrice.value;  // anterior mente cuando corria el programa me marcaba un error como NaN
                                         // Esto se debe a que no escribí bien la pabra (inputPrice.Value) la forma correcta es (inputPrice.value) value es en minuscula al inicio.                      
//   const inputDiscount = document.getElementById("InputDiscount");
//   const discountValue = inputDiscount.value;
   //alert(precioConDescuento);
//   const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
//   const resultP = document.getElementById("ResultP");
//   resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//}

const cupon = [
    "JuanDC_es_Batman",
    "Pero_no_le_Digas_a_nadie",
    "es_un_secreto",
];

function onclickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;  

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    let descuento;

    switch(couponValue){
        case "JuanDC_es_Batman":
            descuento = 15;
        break;
        case "Pero_no_le_Digas_a_nadie":
            descuento = 30;
        break;
        case "es_un_secreto":
            descuento = 25;
        break
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El pŕecio con descuento son: $" + precioConDescuento;
}





