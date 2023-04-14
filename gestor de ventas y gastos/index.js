        const venta = document.getElementById("venta");
        const guardar = document.getElementById("guardarVentas");
        const mostrar = document.getElementById("mostrarVentas");
        const mostrarSuma = document.getElementById("mostrarSuma");
        const borraando = document.getElementById("borrar");
        const div_ventas = document.getElementById("ventas");
        const alerta = document.getElementById("divAlerta");
        

        const totalDeVentas = JSON.parse(localStorage.getItem("items")) || [];

        guardar.addEventListener("click", () => {
            alerta.innerHTML = "";
            if(venta.value != "") {
                
                totalDeVentas.push(parseFloat(venta.value));
                localStorage.setItem("items", JSON.stringify(totalDeVentas));
                console.log(totalDeVentas);
                
            } else {
                alerta.innerHTML = `<p class = "textAlert">Debe ingresar una cantidad</p>`;
            }
        });

        mostrar.addEventListener("click", () => {
            if(totalDeVentas != ""){
                for(let i = 0; i < totalDeVentas.length; i++) {
                    div_ventas.innerHTML += `<li>${i+1} -. ${totalDeVentas[i]}</li>`;
                }
            } else {
                alerta.innerHTML = `<p class = "textAlert">No hay valores almacenados</p>`;
            }
        });

        mostrarSuma.addEventListener("click", () => {
            let totalDeSuma = 0;
            totalDeVentas.forEach( (suma) => {
                totalDeSuma += suma;
            });
            div_ventas.innerHTML = `<p>${totalDeSuma}</p>`;
        });

        borraando.addEventListener("click", () => {
            localStorage.clear();
        } );



