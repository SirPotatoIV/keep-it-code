// const nodemailer = require("nodemailer")

// let transporter = nodemailer.createTransport(transport[,defaults])

const subscribeBtnEl = document.getElementById("subscribeBtn");
const emailInputEl = document.getElementById("emailInput");
console.log(emailInputEl);

subscribeBtnEl.addEventListener("click", function(event) {
  event.preventDefault();
});
