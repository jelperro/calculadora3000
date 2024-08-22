function suma() {
    let num1 = document.getElementById('num1').value;   
    let num2 = document.getElementById('num2').value;
    let resultado = parseFloat(num1) + parseFloat(num2);
    
    
    if (isNaN(resultado)) {
        alert("Error: Debe ingresar valores numéricos.");
        return;
    } else {
        console.log("El resultado es: " + resultado);
        document.getElementById('result').innerHTML = resultado;
        return resultado;

        
    }
    
    }


function resta() {
    let num1 = document.getElementById('num1').value;   
    let num2 = document.getElementById('num2').value;
    let resultado = parseFloat(num1) - parseFloat(num2);
    console.log(resultado);

        if (isNaN(resultado)) {
            alert("Error: Debe ingresar valores numéricos.");
            return;

        } else {
            console.log("El resultado es: " + resultado);
            document.getElementById('result').innerHTML = resultado;
            return resultado;

        
    }
}

function multiplicacion() {
    let num1 = document.getElementById('num1').value;   
    let num2 = document.getElementById('num2').value;
    let resultado = parseFloat(num1) * parseFloat(num2);
    console.log(resultado);
    
            if (isNaN(resultado)) {
            alert("Error: Debe ingresar valores numéricos.");
            return;

        } else {
            console.log("El resultado es: " + resultado);
            document.getElementById('result').innerHTML = resultado;
            return resultado;}
}

function division() {
    let num1 = document.getElementById('num1').value;   
    let num2 = document.getElementById('num2').value;
    let resultado = parseFloat(num1) / parseFloat(num2);
    console.log(resultado);
    
    if (isNaN(resultado)) {
        alert("Error: Debe ingresar valores numéricos.");
        return;

    } else {
        console.log("El resultado es: " + resultado);
        document.getElementById('result').innerHTML = resultado;
        return resultado;}}

function sqrt() {
    let num1 = document.getElementById('num1').value;   
    let resultado = Math.sqrt(parseFloat(num1));
    console.log(resultado);
    
    if (isNaN(resultado)) {
        alert("Error: Debe ingresar valores numéricos.");
        return;

    } else {
        console.log("El resultado es: " + resultado);
        document.getElementById('result').innerHTML = resultado;
        return resultado;}}
