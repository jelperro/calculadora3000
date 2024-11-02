let numcount = 5; // Inicia en 5 ya que tienes 4 inputs iniciales

        function addInput() {
            const container = document.getElementById("inputContainer");
                if (numcount>10){
                    alert("No se pueden agregar más notas. Máximo 10 notas.");
                    return;
                }
            // Crear el primer input (nota)
            const input1 = document.createElement('input');
            input1.type = "text";
            input1.id = "not" + numcount;
            input1.placeholder = "Nota";
            input1.maxLength = "3";

            // Crear el segundo input (peso en porcentaje)
            const input2 = document.createElement('input');
            input2.type = "text";
            input2.id = "per" + numcount;
            input2.placeholder = "Peso(%)";
            input2.maxLength = "3";
            input2.className = "inppeq";

            // Agregar los inputs al contenedor
            container.appendChild(input1);
            container.appendChild(input2);
            container.appendChild(document.createElement("br")); // Salto de línea para organización

            numcount++;
        }

        function calcular() {
            let res = document.getElementById('res');
            let sumTotal = 0;
            let pesoTotal = 0;

            for (let i = 1; i < numcount; i++) {
                let nota = parseFloat(document.getElementById('not' + i).value) || 0;
                let peso = parseFloat(document.getElementById('per' + i).value) || 0;

                sumTotal += nota * peso;
                pesoTotal += peso;
            }

            let promedioPonderado = pesoTotal > 0 ? (sumTotal / pesoTotal) : 0;
            res.innerHTML = `Resultado: ${promedioPonderado.toFixed(2)}`;
        }
