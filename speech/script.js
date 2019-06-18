window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recignition = new SpeechRecognition()
recignition.interimResults = true

let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p)

recignition.addEventListener('results', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
  p.textContent = transcript
  if (e.results[0].isFinal) {
    p = document.createElement('p')
    words.appendChild(p)
  }
  console.log(transcript)
})

recignition.addEventListener('end', recignition.start)

recignition.start()