import './style.css'

document.querySelector('#github-link').addEventListener('click', function(ev) {
  ev.preventDefault()

  window.open('https://github.com/glenn-velasco', '_blank', 'noopener,noreferrer');
})

document.querySelector('#linkedin-link').addEventListener('click', function(ev) {
  ev.preventDefault()

  window.open('https://www.linkedin.com/in/glenn-velasco/', '_blank', 'noopener,noreferrer');
})