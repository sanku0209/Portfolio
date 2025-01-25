const scriptURL = 'https://script.google.com/macros/s/AKfycbw7O-8keqmM5Pp2mbAygSIft2bBduF0lFIIO2vwwIZn07qLBg6lzNgOii6F869H-xnu/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})