const myModal = document.getElementById('contact-modal')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})