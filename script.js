const answerBtn = document.querySelectorAll('button')

answerBtn.forEach(function(button) {
    button.addEventListener('click', function(e) {
      const answer = e.currentTarget.parentElement.parentElement
      answer.classList.toggle('show-answer')
    })
})