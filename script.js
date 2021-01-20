const btn = document.querySelector(".submit");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("form");

let emailRegex = /^[A-Za-z0-9]+@[A-Za-z]+[.]([A-Za-z]+$|[A-Za-z]+[.][A-Za-z]+$)/;

function inputError(input) {
  input.nextElementSibling.classList.remove("hide");
  input.parentElement.nextElementSibling.classList.remove("hide");
  input.style.borderColor = "hsl(0, 100%, 74%)";
  input.style.color = "hsl(0, 100%, 74%)";
}

function validateInput(input) {
  input.nextElementSibling.classList.add("hide");
  input.parentElement.nextElementSibling.classList.add("hide");
  input.style.borderColor = "hsl(246, 25%, 77%)";
  input.style.color = "hsl(249, 10%, 26%)";
}

function validateForm() {
  if (firstName.value == "") {
    inputError(firstName);
  } else {
    validateInput(firstName);
  }
  if (lastName.value == "") {
    inputError(lastName);
  } else {
    validateInput(lastName);
  }
  if (email.value == "") {
    inputError(email);
    email.parentElement.nextElementSibling.innerHTML =
      "Email Address cannot be empty";
  } else if (emailRegex.test(email.value) != true) {
    inputError(email);
    email.parentElement.nextElementSibling.innerHTML =
      "Looks like that is not an email";
  } else {
    validateInput(email);
  }
  if (password.value == "") {
    inputError(password);
  } else {
    validateInput(password);
  }
  if (
    firstName.value != "" &&
    lastName.value != "" &&
    email.value != "" &&
    emailRegex.test(email.value) &&
    password.value != ""
  ) {
    form.submit();
  }
}

btn.addEventListener("click", validateForm);

form.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    validateForm();
  }
});
