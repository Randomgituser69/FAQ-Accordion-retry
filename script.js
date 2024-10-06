const disclose = document.querySelectorAll('.question')
function hmm() {
  const togglu = this.getAttribute('aria-exanded') === "true"
  this.setAttribute('aria-expanded', !togglu)
}
function inchi() {
  if(!disclose.length) {
    return
  }
  disclose.forEach(component => {
     component.dataset.state = "ready"
     const discloseBtn = component.querySelectorAll('button')
     discloseBtn.forEach(btn => {
      btn.removeAttribute('disabled')
      btn.addEventListener('click', hmm)
     })
  })
  }
  inchi()