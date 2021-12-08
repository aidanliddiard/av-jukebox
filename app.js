const audio = document.getElementById('audio');

const rainSound = document.getElementById('rain-sound');
rainSound.addEventListener('click', () => {
  audio.src = 'audio/rain.wav';
  audio.play();
});

const oceanSound = document.getElementById('ocean-sound');
oceanSound.addEventListener('click', () => {
  audio.src = 'audio/ocean.wav';
  audio.play();
});

const fanSound = document.getElementById('fan-sound');
fanSound.addEventListener('click', () => {
  audio.src = 'audio/fan.wav';
  audio.play();
});