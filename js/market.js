const productos = [
    
    {nombre: "Leche" , precio: 45 },
    {nombre: "Azucar" , precio: 80},
    {nombre: "Mermelada" , precio: 200},
    {nombre: "Pan" , precio: 100},
    {nombre: "Cafe" , precio: 150},
    {nombre: "Fideos" , precio: 450},
    {nombre: "Manteca" , precio: 250},
    {nombre: "Salsa" , precio: 300},
    {nombre: "Salchichas" , precio: 500},
    {nombre: "Papas" , precio: 75},
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

    if(producto == 'Leche'||producto == "Azucar"||producto =="Mermelada" ||producto == "Pan"||producto =="Cafe" ||producto =="Fideos" ||producto =="Manteca"||producto =="Salsa"||producto =="Salchichas"||producto =="Papa"){
        switch(producto){
            case "Leche":
             precio = 45;
             break;
            case "Azucar":
             precio = 80 ;
             break;
            case "Mermelada":
             precio = 200;
             break;
            case "Pan":
             precio = 10;
             break;
            case "Cafe":
             precio = 150;
             break;
            case "Fideos":
             precio = 450;
             break;
            case "Manteca":
             precio = 250;
             break;
            case "Salsa":
             precio = 350;
             break;
            case "Salchichas":
             precio = 500;
             break;
            case "Papa":
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
           document.write(`producto: ${carritoFinal.producto}, unidades${carritoFinal.cantidad}, total a pagar por producto ${carritoFinal.cantidad * carritoFinal.precio}`)
        })
        break;
    }
}

const totalDeLaCompra = carrito.reduce ((acumulador, elemento)=>acumulador + elemento.precio * elemento.cantidad, 0 )
document.write(`el total de la compra es: ${totalDeLaCompra}`)