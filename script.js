const answerBtns = document.querySelectorAll('button')

answerBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      const answer = e.currentTarget.parentElement.parentElement
      answer.classList.toggle('show-answer')
    })
})