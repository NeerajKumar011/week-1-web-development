const form = document.getElementById('signupForm');
const successMsg = document.getElementById('successMsg');

// helper – show or clear error for a field
function setError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (message) {
    error.textContent = message;
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    error.textContent = '';
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
}

function validateName() {
  const val = document.getElementById('name').value.trim();
  if (!val) {
    setError('name', 'nameError', 'Name is required.');
    return false;
  }
  if (val.length < 3) {
    setError('name', 'nameError', 'Name must be at least 3 characters.');
    return false;
  }
  setError('name', 'nameError', '');
  return true;
}

function validateEmail() {
  const val = document.getElementById('email').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!val) {
    setError('email', 'emailError', 'Email is required.');
    return false;
  }
  if (!emailPattern.test(val)) {
    setError('email', 'emailError', 'Enter a valid email address.');
    return false;
  }
  setError('email', 'emailError', '');
  return true;
}

function validatePassword() {
  const val = document.getElementById('password').value;
  if (!val) {
    setError('password', 'passwordError', 'Password is required.');
    return false;
  }
  if (val.length < 8) {
    setError('password', 'passwordError', 'Password must be at least 8 characters.');
    return false;
  }
  setError('password', 'passwordError', '');
  return true;
}

function validateConfirm() {
  const pass = document.getElementById('password').value;
  const confirm = document.getElementById('confirmPassword').value;
  if (!confirm) {
    setError('confirmPassword', 'confirmError', 'Please confirm your password.');
    return false;
  }
  if (pass !== confirm) {
    setError('confirmPassword', 'confirmError', 'Passwords do not match.');
    return false;
  }
  setError('confirmPassword', 'confirmError', '');
  return true;
}

// Real-time validation on blur
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('confirmPassword').addEventListener('blur', validateConfirm);

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isValid =
    validateName() &
    validateEmail() &
    validatePassword() &
    validateConfirm();

  if (isValid) {
    successMsg.style.display = 'block';
    form.reset();
    // remove valid class from inputs after reset
    document.querySelectorAll('input').forEach(inp => {
      inp.classList.remove('valid', 'invalid');
    });
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 3000);
  }
});
