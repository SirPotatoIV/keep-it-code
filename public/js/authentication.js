// Video I watched to learn about firebase authentication https://www.youtube.com/watch?v=-OKrloDzGpU
/*global firebase, event*/

const firebaseConfig = {
  apiKey: "AIzaSyD5alrljLCBtksvrKyHn4z_iFESYa-ohTs",
  authDomain: "keep-it-code.firebaseapp.com",
  databaseURL: "https://keep-it-code.firebaseio.com",
  projectId: "keep-it-code",
  storageBucket: "keep-it-code.appspot.com",
  messagingSenderId: "103775527406",
  appId: "1:103775527406:web:d29cdd07037a0d82a56eff",
  measurementId: "G-YELS4BVBFM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// get elements from docment
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const loginBtnEl = document.getElementById("logInBtn");
// const signUpBtnEl = document.getElementById("signUpBtn")
const logoutBtnEl = document.getElementById("logOutBtn");
const emailHelpEl = document.getElementById("emailHelp");
const passwordHelpEl = document.getElementById("passwordHelp");
const createArticleLinkEl = document.getElementById("createArticleLink");

function login() {
  // add login event
  loginBtnEl.addEventListener("click", async function(event) {
    event.preventDefault();
    // get email and password
    const email = emailEl.value;
    const password = passwordEl.value;
    const auth = firebase.auth();
    // sign in
    try {
      await auth.signInWithEmailAndPassword(email, password);
      emailHelpEl.innerText = null;
    } catch (err) {
      console.log("issue occurred during login: ", err);
      emailHelpEl.innerText = `${err.message} or doesn't exist, please try again.`;
    }
  });
}
login();

function authenticationState() {
  // checks if user is logged in or not
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      // makes logout button visible
      logoutBtnEl.classList.remove("d-none");
      createArticleLinkEl.classList.remove("d-none");
      passwordHelpEl.innerText = "You are currently logged in.";
    } else {
      console.log("not logged in");
      // hides logout button visible
      logoutBtnEl.classList.add("d-none");
      createArticleLinkEl.classList.add("d-none");
    }
  });
}
authenticationState();

function logout() {
  logoutBtnEl.addEventListener("click", function() {
    // log user out
    firebase.auth().signOut();
    passwordHelpEl.innerText = "You have logged out.";
  });
}
logout();
