import { sleepSounds } from './data.js';

const template = document.getElementById('template');
const soundList = document.getElementById('sound-list');
const audio = document.getElementById('audio');


for (let sleepSound of sleepSounds) {
  const copy = template.content.cloneNode(true);
  const name = copy.querySelector('h2');
  const image = copy.querySelector('img');
  const button = copy. querySelector('button');
  name.textContent = sleepSound.name;
  image.src = sleepSound.image;

  button.addEventListener('click', () => {
    audio.src = sleepSound.audio;
    audio.play();
  });

  soundList.appendChild(copy);
}
