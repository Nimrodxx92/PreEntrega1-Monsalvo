/* Simulador de préstamos con condicional */

let importe = parseFloat(prompt("Ingrese importe del préstamo (desde 5000 hasta 800000 pesos):"));
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (3, 6, 9, 12, 18, 24 o 36):"));

function calcularCuota(importe, cuotas) {
    let costoFinancieroUno = 120.44; // Costo financiero de 3 a 9 cuotas (%)
    let costoFinancieroDos = 135.44; // Costo financiero para 24 cuotas (%)
    let costoFinancieroTres = 168; // Costo financiero 36 cuotas (%)

    let valor;

    if (importe < 5000 || importe > 800000) {
        return "Importe no válido.";
    } else {
        if (cuotas === 3 || cuotas === 6 || cuotas === 9 || cuotas === 12) {
            valor = (importe * (1 + (costoFinancieroUno / 100))) / cuotas;
        } else if (cuotas === 18 || cuotas === 24) {
            valor = (importe * (1 + (costoFinancieroDos / 100))) / cuotas;
        } else if (cuotas === 36) {
            valor = (importe * (1 + (costoFinancieroTres / 100))) / cuotas;
        } else {
            return "Cantidad de cuotas no válida.";
        }
        return `El importe de cada cuota es: $${valor.toFixed(2)}`;
    }
}

let resultado = calcularCuota(importe, cuotas);
alert(resultado);