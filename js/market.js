const productos = [
    
    {nombre: "leche" , precio: 45 },
    {nombre: "azucar" , precio: 80},
    {nombre: "mermelada" , precio: 200},
    {nombre: "pan" , precio: 100},
    {nombre: "cafe" , precio: 150},
    {nombre: "fideos" , precio: 450},
    {nombre: "manteca" , precio: 250},
    {nombre: "salsa" , precio: 300},
    {nombre: "salchichas" , precio: 500},
    {nombre: "papas" , precio: 75},
] 
let carrito = []

let nombre = prompt("ingrese su nombre")
let compra = prompt("Hola " + nombre + ", le gustaria comprar algo, si o no")

while(compra != "si" && compra != "no"){
    alert("por favor ingrese una opcion valida")
    compra = prompt("Hola " + nombre + ", le gustaria comprar algo, si o no")
}
if(compra == "si"){
    alert("estos son nuestros productos")
    let inventario = productos.map((producto)=> producto.nombre + " " + producto.precio + "$")
    alert(inventario.join ("--"))
}else if(compra == "no"){
    alert ("Gracias! vuelva pronto")
}

while(compra != "no"){
    let producto = prompt("elija su producto")
    let precio = 0

    if(producto == 'leche'||producto == "azucar"||producto =="mermelada" ||producto == "pan"||producto =="cafe" ||producto =="fideos" ||producto =="manteca"||producto =="salsa"||producto =="salchichas"||producto =="papa"){
        switch(producto){
            case "leche":
             precio = 45;
             break;
            case "azucar":
             precio = 80 ;
             break;
            case "mermelada":
             precio = 200;
             break;
            case "pan":
             precio = 10;
             break;
            case "cafe":
             precio = 150;
             break;
            case "fideos":
             precio = 450;
             break;
            case "manteca":
             precio = 250;
             break;
            case "salsa":
             precio = 350;
             break;
            case "salchichas":
             precio = 500;
             break;
            case "papa":
             precio = 75;
             break;
            default:
             break;
        }
    let cantidad = parseInt(prompt("cuantas unidades desea comprar"))

    carrito.push({producto, cantidad, precio})
    console.log (carrito)
    }else{
        alert ("no tenemos ese producto")
    }

    compra = prompt(nombre + " quiere agregar algo mas?")

    while(compra === "no"){
        alert("gracias por su compre, vuelva pronto")
        carrito.forEach((carritoFinal) => {
           document.write(`Producto: \n ${carritoFinal.producto}, \n unidades ${carritoFinal.cantidad},  \n total a pagar por producto ${carritoFinal.cantidad * carritoFinal.precio}. `)
        })
        break;
    }
}

const totalDeLaCompra = carrito.reduce ((acumulador, elemento)=>acumulador + elemento.precio * elemento.cantidad, 0 )
document.write(` \n El total de la compra es: ${totalDeLaCompra}`) 