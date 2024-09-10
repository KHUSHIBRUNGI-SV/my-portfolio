document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        
        document.getElementById('contact-form').reset(); // Reset the form fields
    } else {
        alert('Please fill in all fields.');
    }
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbzprfgjzBO5ffRLIQZ7ojcQUzNc1Au6eVLtRMU_8-dlK5bvUARSqOh0ZlDKpAg3t-GD/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerText = "MESSAGE SENT SUCCESSFULLY"
        setTimeout(function(){
            msg.innerText = ""
        },1000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})