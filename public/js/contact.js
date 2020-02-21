// const nodemailer = require("nodemailer")

// let transporter = nodemailer.createTransport(transport[,defaults])

const subscribeBtnEl = document.getElementById("subscribeBtn");
const firstNameInputEl = document.getElementById("firstNameInput");
const lastNameInputEl = document.getElementById("lastNameInput");
const emailInputEl = document.getElementById("emailInput");

subscribeBtnEl.addEventListener("click", function(event) {
  event.preventDefault();
  console.log(
    emailInputEl.value,
    firstNameInputEl.value,
    lastNameInputEl.value
  );
});
