// create the variables needed to start creating the logic for the validator
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


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

// function to validate emails --- straight from stackOverflow
function validateEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(input.value).toLowerCase())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid');
  }
}

// check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// upperCase the first letter of each input
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// check the length of the passwords
function checkLength(input, min, max) {
  let len = input.value.length;

  if (len < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (len > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`)
  } else {
    showSuccess(input);
  }
}

// check the passwords math
function checkEqualPasswords(inputOne, inputTwo) {
  if(inputOne.value !== inputTwo.value){
    showError(inputTwo, `${getFieldName(inputTwo)} passwords do not match!`)
  } else{
    showSuccess(inputTwo);
  }

}

// add the event listener
form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevents the submission

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 20);
  checkEqualPasswords(password, password2)
  validateEmail(email);
});