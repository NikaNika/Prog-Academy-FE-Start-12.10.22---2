const tabs = document.querySelectorAll('.tab');
const signUpBtn = tabs[0];
const loginBtn = tabs[1];
const signupContent = document.querySelector('#signup');
const loginContent = document.querySelector('#login');

function loginTabHandler(e) {
  e.preventDefault();
  this.classList.add('active');
  this.previousElementSibling.classList.remove('active');
  loginContent.style.display = 'block';
  signupContent.style.display = 'none';
}

function signUpTabHandler(e) {
	e.preventDefault();
	this.classList.add('active');
  this.nextElementSibling.classList.remove('active');	
  loginContent.style.display = 'none';
	signupContent.style.display = 'block';
}

loginBtn.addEventListener('click', loginTabHandler);
signUpBtn.addEventListener('click', signUpTabHandler);



