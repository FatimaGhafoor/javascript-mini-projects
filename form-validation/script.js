const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

function validateName() {
  const name = nameInput.value.trim();
  if (name === "") {
    nameError.textContent = "Name required";
    return false;
  } else if (name.length < 3) {
    nameError.textContent = "At least 3 characters required";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

nameInput.addEventListener("input", validateName);

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

function validateEmail() {
  const email = emailInput.value.trim();
  if (email === "") {
    emailError.textContent = "Email required";
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Invalid email";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}
emailInput.addEventListener("input", validateEmail);

const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

function validatePassword() {
  const password = passwordInput.value.trim();

  if (password === "") {
    passwordError.textContent = "Password required";
    return false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    return false;
  } else {
    passwordError.textContent = "Strong password ✅";
    return true;
  }
}

passwordInput.addEventListener("input", validatePassword);

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  if (!isNameValid || !isEmailValid || !isPasswordValid) {
    // stop if any validation fails
    return;
  }
  alert("Form submitted successfully! ✅");
});
