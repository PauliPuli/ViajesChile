const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.getElementById('#enviar').onclick = function(){
    alert('¡Gracias por su interés! Responderemos su mensaje a la brevedad');
}
