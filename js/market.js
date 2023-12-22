const productos = [
    
    {nombre: "Leche" , precio: 45 },
    {nombre: "Azucar" , precio: 80},
    {nombre: "Mermelada" , precio: 200},
    {nombre: "Pan 1K" , precio: 100},
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