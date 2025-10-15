const contenedorBotones = document.querySelector(".contenedor-botones");
const botones = contenedorBotones.querySelectorAll("button");
const contenidos = document.querySelectorAll(".tab-content");

function abrirPestana(event){
    const botonClic = event.currentTarget;
    const botonId =botonClic.id;
    const contenidoId =botonId.replace("-btn","-content");
    
    botones.forEach(boton => {
       boton.classList.remove("activo"); 
    });
    
    contenidos.forEach(contenido => {
        contenido.classList.remove("visible");
    });
    
    botonClic.classList.add("activo");

    const contenidoMostrar = document.getElementById(contenidoId);
        if(contenidoMostrar){
            contenidoMostrar.classList.add("visible");
        }
}

botones.forEach(boton => {
    boton.addEventListener("click",abrirPestana);
});

// ñiñiñi 
document.getElementById("tab1-btn").click();



document.addEventListener('DOMContentLoaded', function() {
    
    const headers = document.querySelectorAll('.carrera-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const detalle = this.nextElementSibling; 

            detalle.classList.toggle('open');
            
            if (detalle.classList.contains('open')) {
                this.textContent = this.textContent.replace('+', '-');
            } else {
                this.textContent = this.textContent.replace('-', '+');
            }
            
            headers.forEach(otherHeader => {
                if (otherHeader !== this) {
                    const otherDetalle = otherHeader.nextElementSibling;
                    if (otherDetalle.classList.contains('open')) {
                        otherDetalle.classList.remove('open');
                        otherHeader.textContent = otherHeader.textContent.replace('[-]', '[+]');
                    }
                }
            });
        });
    });
});

