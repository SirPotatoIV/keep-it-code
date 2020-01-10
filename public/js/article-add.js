/*global firebase, axios*/

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

// Get html elements
const uploadHelpEl = document.getElementById("uploadHelp");
const articleTextEl = document.getElementById("articleText");
const uploadBtnEl = document.getElementById("uploadBtn");
const uploadedImageEl = document.getElementById("uploadedImage");
const tileInputEl = document.getElementById("titleInput");

firebase.auth().onAuthStateChanged(firebaseUser => {
  //   console.log(firebaseUser);
});

function uploadImage() {
  console.log("preview file triggered");
  const preview = document.querySelector("img");

  const file = document.querySelector("input[type=file]").files[0];

  const reader = new FileReader();

  // another load event example https://developer.mozilla.org/en-US/docs/Web/API/FileReader/load_event
  reader.addEventListener(
    "load",
    async function() {
      console.log("load function");
      // Updates the img tag with the base64 string that was created
      preview.src = reader.result;
    },
    false
  );

  if (file) {
    // This triggers the load in the event listener for the reader.
    // This is older code that existed before promises. This handles the async nature of reader.
    // This allows reader to complete reading the file into a url (base64) before the code updates the img with base64 string.
    reader.readAsDataURL(file);
  }
}

function uploadBtn() {
  uploadBtnEl.addEventListener("click", async function() {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    let uid = 1;
    let isValidUid = false;
    const test = await firebase.auth().currentUser;
    console.log(test);

    try {
      const currentUser = await firebase.auth().currentUser;
      if (currentUser) {
        console.log(currentUser);
        uid = currentUser.uid;
        //   console.log(uid)
      } else {
        uploadHelpEl.innerText = "You are not logged in.";
        // do nothing
      }
    } catch (err) {
      console.log(err);
    }

    try {
      console.log("hello", uid);
      isValidUid = await axios.get(`/api/users/${uid}`);
      console.log(isValidUid.data);
    } catch (err) {
      console.log("error occurred while getting users: ", err);
    }
    console.log(isValidUid.data);
    if (isValidUid.data === "true") {
      getArticleData(uid);
    } else {
      uploadHelpEl.innerText = "Not logged in, or invalid UID";
      console.log("UID does not match users");
      return;
    }
  });
}
uploadBtn();

async function getArticleData(uid) {
  const username = uid;
  const title = tileInputEl.value;
  const articleText = articleTextEl.value;
  const image = uploadedImageEl.src;

  if (username && title && articleText && image) {
    try {
      // eslint-disable-next-line no-undef
      await axios.post("/api/articles", {
        user_id: username,
        title: title,
        text: articleText,
        image_string: image
      });

      uploadHelpEl.innerText = "Success!";
    } catch (error) {
      console.log("Error occurred uploading article to database: ", error);
      uploadHelpEl.innerText = `Error occurred uploading article to database: ${error}.`;
    }
  } else {
    uploadHelpEl.innerText = "Fill out all the fields";
    console.log("Fill out all the fields");
  }
}
