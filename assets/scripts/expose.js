// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const jsConfetti = new JSConfetti()
  const hornSelect = document.getElementById('horn-select');
  const volumeInput = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');


const hornType = {
  'air-horn': {
    'sound': './assets/audio/air-horn.mp3',
    'image': './assets/images/air-horn.svg'
  },
  'car-horn': {
    'sound': './assets/audio/car-horn.mp3',
    'image': './assets/images/car-horn.svg'
  },
  'party-horn': {
    'sound': './assets/audio/party-horn.mp3',
    'image': './assets/images/party-horn.svg'
  }
};

 // Update the image and audio when a horn is selected
hornSelect.addEventListener('change', () => {
  const hornName = hornSelect.value;
  const horn = hornType[hornName];
  
  if (horn) {
    audioElement.src = horn.sound;
    audioElement.volume = volumeInput.value / 100;
    document.querySelector('img').src = horn.image;
  }
});

// display volumn level accordingly
volumeInput.addEventListener('input', () => {
  const volume = volumeInput.value;
  
  if (volume == 0) {
    volumeIcon.src = './assets/icons/volume-level-0.svg';
  } else if (volume < 33) {
    volumeIcon.src = './assets/icons/volume-level-1.svg';
  } else if (volume < 67) {
    volumeIcon.src = './assets/icons/volume-level-2.svg';
  } else {
    volumeIcon.src = './assets/icons/volume-level-3.svg';
  }
  audioElement.volume = volume / 100;

});

// When the play button is clicked, play the selected horn sound
playButton.addEventListener('click', (event) => {
  event.preventDefault();
    
  if (hornSelect.value == 'party-horn') {
    // If Party Horn is selected, shoot confetti
    jsConfetti.addConfetti();
  }
    
  audioElement.play();

  });

}
