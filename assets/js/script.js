const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.getElementById('enviar').onclick = function(){
    alert('¡Listo! Nos contactaremos con usted a la brevedad');
}

// tutorial https://youtu.be/kmmxxfyufLE?si=Xb0LBuLY-4mEz0Gt&t=598 cambié 'var' por 'let' y 'addEventListener' por 'scrollY'//
let nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
    if(this.window.scrollY > 1000){
        nav.classList.add('bg-dark');
    }else{
        nav.classList.remove('bg-dark');
    }
})