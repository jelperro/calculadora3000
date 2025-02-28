

function transformar() {
    // Cargamos la primera selección
    let sel1 = document.getElementById("opt1");
    let indx1 = sel1.selectedIndex;
    let uni1 = sel1.options[indx1].value;

    // Cargamos la segunda selección
    let sel2 = document.getElementById("opt2");
    let indx2 = sel2.selectedIndex;
    let uni2 = sel2.options[indx2].value;

    // Cargamos el número
    let num1 = parseFloat(document.getElementById("num1").value);
    // Cargamos el sitio donde pondremos el resultado
    let res = 0;

    // Empiezan los casos
    switch (uni1) {
        case "m":
            switch (uni2) {
                case "m":
                    res = num1;
                    break;
                case "km":
                    res = num1 / 1000;
                    break;
                case "cm":
                    res = num1 * 100;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "km":
            switch (uni2) {
                case "m":
                    res = num1 * 1000;
                    break;
                case "km":
                    res = num1;
                    break;
                case "cm":
                    res = num1 * 100000;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "cm":
            switch (uni2) {
                case "m":
                    res = num1 / 100;
                    break;
                case "km":
                    res = num1 / 100000;
                    break;
                case "cm":
                    res = num1;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "s":
            switch (uni2) {
                case "s":
                    res = num1;
                    break;
                case "min":
                    res = num1 / 60;
                    break;
                case "h":
                    res = num1 / 3600;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "min":
            switch (uni2) {
                case "s":
                    res = num1 * 60;
                    break;
                case "min":
                    res = num1;
                    break;
                case "h":
                    res = num1 / 60;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "h":
            switch (uni2) {
                case "s":
                    res = num1 * 3600;
                    break;
                case "min":
                    res = num1 * 60;
                    break;
                case "h":
                    res = num1;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "l":
            switch (uni2) {
                case "l":
                    res = num1;
                    break;
                case "ml":
                    res = num1 * 1000;
                    break;
                case "dm3":
                    res = num1;
                    break;
                case "cm3":
                    res = num1 * 1000;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "ml":
            switch (uni2) {
                case "l":
                    res = num1 / 1000;
                    break;
                case "ml":
                    res = num1;
                    break;
                case "dm3":
                    res = num1 / 1000;
                    break;
                case "cm3":
                    res = num1;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "dm3":
            switch (uni2) {
                case "l":
                    res = num1;
                    break;
                case "ml":
                    res = num1 * 1000;
                    break;
                case "dm3":
                    res = num1;
                    break;
                case "cm3":
                    res = num1 * 1000;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "cm3":
            switch (uni2) {
                case "l":
                    res = num1 / 1000;
                    break;
                case "ml":
                    res = num1;
                    break;
                case "dm3":
                    res = num1 / 1000;
                    break;
                case "cm3":
                    res = num1;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "g":
            switch (uni2) {
                case "g":
                    res = num1;
                    break;
                case "kg":
                    res = num1 / 1000;
                    break;
                case "mg":
                    res = num1 * 1000;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "kg":
            switch (uni2) {
                case "g":
                    res = num1 * 1000;
                    break;
                case "kg":
                    res = num1;
                    break;
                case "mg":
                    res = num1 * 1000000;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "mg":
            switch (uni2) {
                case "g":
                    res = num1 / 1000;
                    break;
                case "kg":
                    res = num1 / 1000000;
                    break;
                case "mg":
                    res = num1;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "º":
            switch (uni2) {
                case "º":
                    res = num1;
                    break;
                case "rad":
                    res = num1 * (Math.PI / 180);
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "rad":
            switch (uni2) {
                case "º":
                    res = num1 * (180 / Math.PI);
                    break;
                case "rad":
                    res = num1;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "celsius":
            switch (uni2) {
                case "celsius":
                    res = num1;
                    break;
                case "kelvin":
                    res = num1 + 273.15;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "kelvin":
            switch (uni2) {
                case "celsius":
                    res = num1 - 273.15;
                    break;
                case "kelvin":
                    res = num1;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "m/s":
            switch (uni2) {
                case "m/s":
                    res = num1;
                    break;
                case "km/h":
                    res = num1 * 3.6;
                    break;
                case "m/min":
                    res = num1 * 60;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "km/h":
            switch (uni2) {
                case "m/s":
                    res = num1 / 3.6;
                    break;
                case "km/h":
                    res = num1;
                    break;
                case "m/min":
                    res = num1 * 16.6667;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        case "m/min":
            switch (uni2) {
                case "m/s":
                    res = num1 / 60;
                    break;
                case "km/h":
                    res = num1 * 0.06;
                    break;
                case "m/min":
                    res = num1;
                    break;
                default:
                    alert(`No se puede convertir de ${uni1} a ${uni2}`);
                    return;
            }
            break;

        default:
            alert(`No se puede convertir de ${uni1} a ${uni2}`);
            return;
    }
    document.getElementById("solucion").innerHTML = res
}