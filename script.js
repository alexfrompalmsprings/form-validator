// create the variables needed to start creating the logic for the validator
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// functions needed for the file to work

// show input error message
function showError(input, message) {
  // change the css to have the form control error
  let formControl = input.parentElement;
  formControl.className = 'form-control error'

  // error message changes when we have an error
  let smallText = formControl.querySelector('small')
  smallText.innerText = message;

}


// show success
function showSuccess(input) {
  // change the css to have the form control error
  let formControl = input.parentElement;
  formControl.className = 'form-control success'
};

// function to validate emails
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


// add the event listener
form.addEventListener('submit', function (e) {

  e.preventDefault(); // prevents the submission

  // if not user name is being passed
  if (username.value === '') {
    showError(username, 'Please enter Username to continue')
  } else {
    showSuccess(username)
  }

  // if not user name is being passed
  if (email.value === '') {
    showError(email, 'Please enter email to continue')
  } else if (!(validateEmail(email.value))) {
    showError(email, 'Please enter a valid email to continue')
  } else {
    showSuccess(email)
  }

  // if not user name is being passed
  if (password.value === '') {
    showError(password, 'Please enter password to continue')
  } else {
    showSuccess(password)
  }

  // if not user name is being passed
  if (password2.value === '') {
    showError(password2, 'Please confirm the password to continue')
  } else {
    showSuccess(password2)
  }


});