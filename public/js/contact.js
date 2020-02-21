/*global axios*/
/*eslint no-undef: "error"*/
/*eslint-env browser*/

// const nodemailer = require("nodemailer")
// let transporter = nodemailer.createTransport(transport[,defaults])

const subscribeBtnEl = document.getElementById("subscribeBtn");
const firstNameInputEl = document.getElementById("firstNameInput");
const lastNameInputEl = document.getElementById("lastNameInput");
const emailInputEl = document.getElementById("emailInput");

subscribeBtnEl.addEventListener("click", async function(event) {
  event.preventDefault();
  console.log(
    emailInputEl.value,
    firstNameInputEl.value,
    lastNameInputEl.value
  );
  try {
    const response = axios.post("/api/subscribers", {
      first_name: firstNameInputEl.value,
      last_name: lastNameInputEl.value,
      email: emailInputEl.value
    });
    console.log(response);
  } catch (error) {
    console.log("error trying to add a new subscriber");
  }
});
