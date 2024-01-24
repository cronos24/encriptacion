function encriptar() {
    let mensaje = document.getElementById('mensaje').value;
    let respuesta = document.getElementById('respuesta-text');

    if (mensaje == null || mensaje.trim() == '') {
        toggleResultVisibility(false);
    } else {
        if (validarTexto(mensaje)) {
            mensaje = mensaje.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
            respuesta.textContent = mensaje;
            toggleResultVisibility(true);
            aplicarEfecto(respuesta);
        } else {
            alert("El mensaje contiene caracteres no permitidos.");
        }
    }

}

function desencriptar() {
    let mensaje = document.getElementById('mensaje').value;
    let respuesta = document.getElementById('respuesta-text');

    if (mensaje == null || mensaje.trim() == '') {
        toggleResultVisibility(false);
    } else {
        if (validarTexto(mensaje)) {
            mensaje = mensaje.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
            respuesta.textContent = mensaje;
            toggleResultVisibility(true);
            aplicarEfecto(respuesta);
        } else {
            alert("El mensaje contiene caracteres no permitidos.");
        }
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
    return /^[a-z\s.,;:?!-]*$/.test(message);
}

function toggleResultVisibility(texto) {

    let resultDiv = document.getElementById('result');
    let noResultDiv = document.getElementById('noresult');
    let noCardRespuesta = document.getElementById('cardRespuesta');

    if (texto) {
        resultDiv.classList.add("show-result");
        noResultDiv.style.display = 'none';
        noCardRespuesta.classList.add("card-respuesta-after-send");
    } else {
        noCardRespuesta.classList.remove("card-respuesta-after-send");
        resultDiv.classList.remove("show-result");
        noResultDiv.style.display = 'block';
    }

}

function aplicarEfecto(elemento) {
    elemento.classList.remove('fade-in');
    setTimeout(() => elemento.classList.add('fade-in'), 10);
}




