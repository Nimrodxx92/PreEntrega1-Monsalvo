/* Solicitar y ver turnos con ciclos */

function solicitarTurno() {
    let turnosSolicitados = {};

    while (true) {
        let opcion = prompt("¿Qué deseas hacer? (Ingrese el N°)\n1. Solicitar turno\n2. Ver turnos\n3. Salir");
        if (opcion === "1") {
            let nombre = prompt("Ingrese su nombre:");
            if (nombre.toLowerCase() === "salir") {
                break; // Para finalizar los turnos.
            }
            let fecha = prompt("Ingrese la fecha del turno (Ejemplo: 24/07/2023):");
            turnosSolicitados[fecha] = nombre;
            alert("Turno solicitado correctamente para " + nombre + " el " + fecha + ".");
        } else if (opcion === "2") {
            alert("Turnos solicitados:");
            for (let fecha in turnosSolicitados) {
                alert(turnosSolicitados[fecha] + " - " + fecha);
            }
        } else if (opcion === "3") {
            break; // Para finalizar los turnos.
        } else {
            alert("Opción no válida. Por favor, intentelo nuevamente.");
        }
    }
}

solicitarTurno()