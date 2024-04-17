
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name_error');
const emailError = document.getElementById('email_error');
const messageError = document.getElementById('message_error');

form.addEventListener('submit', (event) => {

  var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  if (nameInput.value.trim() === '' || nameInput.value.trim() == null) {
    event.preventDefault();
    nameError.textContent = 'Name is required';
    nameInput.focus(); 
    return; 
  }

  if (!emailInput.value.trim().match(email_check)) {
    event.preventDefault();
    emailError.textContent = 'Please enter a valid email address';
    emailInput.focus();
    return; 
  }

  if (messageInput.value.trim() === '') {
    event.preventDefault();
    messageError.textContent = 'Message is required';
    messageInput.focus(); 
    return; 
  }
});




