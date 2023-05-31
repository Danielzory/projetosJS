'use strict';

const seconds = document.getElementById('segundos')
const minuts = document.getElementById('minutos')
const hours = document.getElementById('horas')
const days = document.getElementById('dias')
const formact = (data) => `0${data}`.slice(-2);

const attTime = (time) => {
    const qttSeconds = time % 60;
    seconds.textContent = formact(qttSeconds);

    const qttMinuts = Math.floor((time % (60 * 60)) / 60);
    minuts.textContent = formact(qttMinuts);

    const qttHours =  Math.floor((time % (60 * 60 * 24)) / (60 * 60));  
    hours.textContent = formact(qttHours);

    const qttDays = Math.floor(time / (60 * 60 * 24));
    days.textContent = formact(qttDays)
}    
const countdown = (time) => {
        
    const count = () =>{
        const stopcount = () => clearInterval(id);

        if (time == 0 ){
            stopcount();
        }
        attTime (time);
        time--;
    } 
    const id = setInterval(count, 1000) // 1000 milesegundos
}

const ajustDay = () => {
    const eventDay = new Date ('2023-08-30 20:00:00') //retornar os mileseg 

    const today = Date.now(); //retorna miliseg

    return Math.floor((eventDay - today) / 1000); //cálculo dos mileseg
}



countdown(ajustDay());