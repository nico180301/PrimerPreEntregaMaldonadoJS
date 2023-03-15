const detallar = (pesocorporal, altura) => {
    return "Peso: " + pesocorporal +
        "\nAltura: " + altura + "\n"
}
const resultado = (detalle, total) => {

    if (total < 18.5 && total >0) {
        alert(
            "Valores Introducidos: \n" + detalle +
            "======================" +
            "\nSu Indice de Masa Corporal es: " + total.toFixed(2) +
            "\nSi su IMC es menos de 18.5 se encuentra en un peso insuficiente")
    } else if (total <= 24.9 && total >= 18.5) {
        alert(
            "Valores Introducidos: \n" + detalle +
            "======================" +
            "\nSu Indice de Masa Corporal es: " + total.toFixed(2) +
            "\nSi su IMC es entre 18.5 y 24.9, se encuentra dentro del rango de peso normal o saludable.")
    } else if (total >= 25.0 && total < 30) {
        alert(
            "Valores Introducidos: \n" + detalle +
            "======================" +
            "\nSu Indice de Masa Corporal es: " + total.toFixed(2) +
            "\nSi su IMC es entre 25.0 y 29.9, se encuentra dentro del rango de sobrepeso.")
    } else{
        alert(
            "Valores Introducidos: \n" + detalle +
            "======================" +
            "\nSu Indice de Masa Corporal es: " + total.toFixed(2) +
            "\nSi su IMC es 30.0 o superior, se encuentra dentro del rango de obesidad.")
    }
}

let rta = ""
let total = 0;
let detalle = ""
do {
    pesocorporal = Number(prompt("Ingrese su peso corporal: "))
    altura = Number(prompt("Ingrese su altura, Ej \"1.70\" : "))
    console.log(pesocorporal)
    console.log(altura)

    total += pesocorporal / (altura ** 2)

    detalle += detallar(pesocorporal, altura)

    rta = prompt("Ingrese \"ok\" para calcular.").toUpperCase()
} while (isNaN(pesocorporal) || isNaN(altura))

resultado(detalle, total)
