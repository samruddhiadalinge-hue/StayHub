(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {

        const comment = form.querySelector('#comment')

        if (comment) {
          comment.setCustomValidity(
            comment.value.trim() === '' ? 'Required' : ''
          )
        }

        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      })
    })
  })
})()