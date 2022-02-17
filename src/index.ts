"Bienvenidos a Mercado 9");
let cargaDelosProductos:string[]=new Array(3);
 let precioDelosProductos:number[]=new Array(3);
 let stockDeProductos:number[]=new Array(3);

function cargarProductos( cargaDelosProductos[3],precioDelosProductos[3],stockDeProductos[3]
) {
  for (let i = 0; i < cargaDelosProductos.length; i++) {
    cargaDelosProductos[i]=String(prompt("Ingreso de productos disponibles"));
  }
  for (let i = 0; i < precioDelosProductos.length; i++) {
    precioDelosProductos[i]=Number(prompt("Ingreso de precio de los productos disponibles"));
  } for (let i = 0; i < stockDeProductos.length; i++) {
    stockDeProductos[i]=Number(prompt("Ingreso de Stock de los productos disponibles"));
  }
 
    console.log(`El primer producto ingresado disponibles es ${cargaDelosProductos[0]} su precio es${precioDelosProductos[0]} y su stock es de${stockDeProductos[0]}`);
  
    console.log(`El segundo producto ingresado disponibles es ${cargaDelosProductos[1]} su precio es${precioDelosProductos[1]} y su stock es de${stockDeProductos[1]}`); 
  
    console.log(`El tercer producto ingresado disponibles es ${cargaDelosProductos[2]} su precio es${precioDelosProductos[2]} y su stock es de${stockDeProductos[2]}`); 
 


 let aComprar= Number(prompt("Cuantos desea comprar"));
while (aComprar <= 0) {
  aComprar = Number(
    prompt(
      "Ingrese la cantidad de productos que va a comprar que sea mayor a 0"
    )
  );
}
function comprarProductos(aComprar: number) {
cargarProductos(cargaDelosProductos[3],precioDelosProductos[3],stockDeProductos[3]);

  for (let index = 0; index < aComprar; index++) {
    let compradeunproducto: string = String(
      prompt("Que producto desea comprar")
    );

    let cantidadAcomprar: number = Number(
      prompt("Ingresa la cantidad a comprar")
    );

    let compradeproducto: string = "";
    let cantidaddecompradeproducto: number = 0;
    let totaldecompra: number = 0;
    let stockdisponible: number = 0;
    if (
      compradeunproducto === cargaDelosProductos[0] &&
      cantidadAcomprar <= stockDeProductos[0]
    ) {
      compradeproducto = compradeunproducto;
      cantidaddecompradeproducto = cantidadAcomprar;
      totaldecompra = precioDelosProductos[0] * cantidaddecompradeproducto;
      stockdisponible = stockDeProductos[0] - cantidaddecompradeproducto;
      console.log(
        `La compra que realizaste: ${compradeproducto} $ ${precioDelosProductos[0]}, la cantidad que compraste ${cantidaddecompradeproducto}, total a pagar ${totaldecompra} y el stock disponible es: ${stockdisponible}`
      );
    } else if (
      compradeunproducto === cargaDelosProductos[1] &&
      cantidadAcomprar <= stockDeProductos[1]
    ) {
      compradeproducto = compradeunproducto;
      cantidaddecompradeproducto = cantidadAcomprar;
      totaldecompra = precioDelosProductos[1] * cantidaddecompradeproducto;
      stockdisponible = stockDeProductos[1] - cantidaddecompradeproducto;
      console.log(
        `La compra que realizaste: ${compradeproducto} $ ${precioDelosProductos[1]}, la cantidad que compraste ${cantidaddecompradeproducto}, total a pagar ${totaldecompra} y el stock disponible es: ${stockdisponible}`
      );
    } else if (
      compradeunproducto === cargaDelosProductos[2] &&
      cantidadAcomprar <= stockDeProductos[2]
    ) {
      compradeproducto = compradeunproducto;
      cantidaddecompradeproducto = cantidadAcomprar;
      totaldecompra = precioDelosProductos[2]* cantidaddecompradeproducto;
      stockdisponible = stockDeProductos[2]- cantidaddecompradeproducto;
      console.log(
        `La compra que realizaste: ${compradeproducto} $ ${precioDelosProductos[2]}, la cantidad que compraste ${cantidaddecompradeproducto}, total a pagar ${totaldecompra} y el stock disponible es: ${stockdisponible}`
      );
    } else {
      console.log("No hay stock del producto que desea comprar;");
    }
  }
}

comprarProductos(aComprar);

