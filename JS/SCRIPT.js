document.addEventListener('DOMContentLoaded', ()=>{
    const overlay = document.getElementById("overlay");
    const btn_cerrar = document.getElementById("btn_cerrar");
    btn_cerrar.addEventListener('click',()=>{
        overlay.style.display = 'none';
    });
});

function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();
    document.getElementById('hora-actual').textContent = hora;
}
setInterval(actualizarHora, 1000);
actualizarHora();







