import { sleepSounds } from './data.js';

const template = document.getElementById('template');
const soundList = document.getElementById('sound-list');
const audio = document.getElementById('audio');

// loop the array
for (let sleepSound of sleepSounds) {
  // for each sound:
  // make a copy of the template
  const copy = template.content.cloneNode(true);
  // find the h2, img, and button elements
  const name = copy.querySelector('h2');
  const image = copy.querySelector('img');
  const button = copy.querySelector('button');
  // set the h2.textContent and img.src
  name.textContent = sleepSound.name;
  image.src = sleepSound.image;

  // subscribe to button click
  button.addEventListener('click', () => {
    audio.src = sleepSound.audio;
    audio.play();
  });

  // add (append) the copy to the list (ul)
  soundList.appendChild(copy);
}
