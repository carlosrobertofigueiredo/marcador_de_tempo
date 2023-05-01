const tempo_el = document.querySelector('.relogio .tempo');
const inicio_btn = document.getElementById('inicio');
const parar_btn = document.getElementById("parar");
const zerar_btn = document.getElementById("zerar");

let segundos = 0;
let intervalo = null;

inicio_btn.addEventListener('click',inicio);
parar_btn.addEventListener('click', parar);
zerar_btn.addEventListener('click', zerar);

function timer(){
    segundos++;

    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos - (horas * 3600)) / 60);
    let seg = segundos % 60;

    if (seg < 10) seg = '0' + seg;
    if (minutos < 10) minutos = '0' + minutos;
    if (horas < 10) horas = '0' + horas;

    tempo_el.innerText = `${horas}:${minutos}:${seg}`;
}

function inicio(){
    if (intervalo){
        return
    }
    intervalo = setInterval(timer, 1000);
}

function parar(){
    clearInterval(intervalo);
    intervalo = null;
}

function zerar(){
    stop();
    segundos = 0;
    tempo_el.innerText = '00:00:00';
}

