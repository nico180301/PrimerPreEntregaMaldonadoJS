const detallar = (pesocorporal,altura)=>{
    return "Peso: "+pesocorporal+
    "\nAltura: "+ altura+"\n"
}
const resultado = (detalle,total) => {
    alert(
        "Valores Introducidos: \n"+detalle+
        "======================"+
        "\nSu Indice de Masa Corporal es: "+total.toFixed(2)
    )
}

let rta = ""
let total = 0;
let detalle = ""
do{
    let pesocorporal = Number(prompt("Ingrese su peso corporal: "))
    let altura = Number(prompt("Ingrese su altura, con desimales: "))
    
    total += pesocorporal / (altura**2)
    detalle += detallar(pesocorporal,altura)

    rta = prompt("Ingrese \"ESC\" para calcular.").toUpperCase()
}while(rta != "ESC")

resultado(detalle,total)
