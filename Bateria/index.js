'use strict'

const songs = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const createDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    document.getElementById('container').appendChild(div);
}

const showSongs = (songs) => Object.keys(songs).forEach(createDiv);

const playNoise = (letter) => {
    const noise = new Audio(`./Sounds/${songs[letter]}`);
    noise.play();
} 

const addEffect = (letter) => {
    document.getElementById(letter).classList.add('active')
}

const removeEffect = (letter) => {
   const div = document.getElementById(letter);
   const removeActive = () => div.classList.remove('active') 
   addEventListener('transitionend', removeActive)
};

const playSong = (evento) => {
    let letter = '';
    
    if(evento.type == 'click') {
        letter = evento.target.id;  
    }else{
        letter = evento.key.toUpperCase();
    }

    const existLetter = songs.hasOwnProperty(letter);

    if (existLetter){
        addEffect(letter);
        playNoise(letter);
        removeEffect(letter);
    }

}

document.getElementById('container').addEventListener('click', playSong)

showSongs(songs);

window.addEventListener('keydown', playSong);




