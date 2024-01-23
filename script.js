function encriptar() {
    let mensaje = document.getElementById('mensaje').value;
    let respuesta = document.getElementById('respuesta-text');

    if (mensaje == null || mensaje.trim() == '') {
        alert("El mensaje no puede estar vacio.");
    } else {
        if (validarTexto(mensaje)) {
            mensaje = mensaje.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
            respuesta.textContent = mensaje;
            toggleResultVisibility();
        } else {
            alert("El mensaje contiene caracteres no permitidos.");
        }
    }

}

function desencriptar() {
    let mensaje = document.getElementById('mensaje').value;
    let respuesta = document.getElementById('respuesta-text');

    if (validarTexto(mensaje)) {
        mensaje = mensaje.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        respuesta.textContent = mensaje;
        toggleResultVisibility();
    } else {
        alert("El mensaje contiene caracteres no permitidos.");
    }
}


function copiar() {
    const resultText = document.getElementById('respuesta-text').textContent;
    navigator.clipboard.writeText(resultText).then(() => {
        alert("Texto copiado al portapapeles!");
    }).catch(err => {
        alert("Algo salió mal", err);
    });
}


function validarTexto(message) {
    return /^[a-z\s]*$/.test(message);
}

function toggleResultVisibility() {

    let resultDiv = document.getElementById('result');
    let noResultDiv = document.getElementById('noresult');
    let noCardRespuesta = document.getElementById('cardRespuesta');

    resultDiv.classList.add("show-result");
    noResultDiv.style.display = 'none';
    noCardRespuesta.classList.add("card-respuesta-after-send");
}


