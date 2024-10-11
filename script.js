const disclose = document.querySelectorAll('.question')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')

function hmm() {
  const togglu = this.getAttribute('aria-expanded') === "true"
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
      btn.removeAttribute('title')
      btn.addEventListener('click', hmm)
     })
  })
  }
  inchi()