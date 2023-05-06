// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const speechSynth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const smiley = document.querySelector('img');
  
  // Load available voices on page load
  speechSynth.onvoiceschanged = () => {
    const voices = speechSynth.getVoices();
  
    // populate the "Select Voice" dropdown with available voices
    for (const voice of voices) {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    }
  }
  
  // add click event listener to "Press to Talk" button
  button.addEventListener('click', () => {
    // create new SpeechSynthesisUtterance with the text to speak
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
  
    // get the selected voice from the dropdown
    const selectedVoiceName = voiceSelect.value;
    const voices = speechSynth.getVoices();
    for (const voice of voices) {
      if (voice.name === selectedVoiceName) {
        utterance.voice = voice;
        break;
      }
    }
  
    // set the start and end event handlers to update the face image
    utterance.onstart = () => {
      smiley.src = './assets/images/smiling-open.png';
    };
    utterance.onend = () => {
      smiley.src = './assets/images/smiling.png';
    };
  
    // start speaking the text
    speechSynth.speak(utterance);
  });
}
