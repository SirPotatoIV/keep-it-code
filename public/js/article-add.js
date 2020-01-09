const uploadHelpEl = document.getElementById("uploadHelp");
const usernameInputEl = document.getElementById("usernameInput");
const articleTextEl = document.getElementById("articleText");
const uploadBtnEl = document.getElementById("uploadBtn");
const uploadedImageEl = document.getElementById("uploadedImage")
const tileInputEl = document.getElementById("titleInput")

function uploadImage() {
    console.log("preview file triggered")
    const preview = document.querySelector('img');

    const file = document.querySelector('input[type=file]').files[0];

    const reader = new FileReader();

    // another load event example https://developer.mozilla.org/en-US/docs/Web/API/FileReader/load_event
    reader.addEventListener("load", async function () {
        console.log("load function");
        // Updates the img tag with the base64 string that was created
        preview.src = reader.result;
    }, false);

    if (file) {
        // This triggers the load in the event listener for the reader. 
        // This is older code that existed before promises. This handles the async nature of reader.
        // This allows reader to complete reading the file into a url (base64) before the code updates the img with base64 string.
        reader.readAsDataURL(file);
    }
}

function uploadBtn() {
    uploadBtnEl.addEventListener("click", function(){
        event.preventDefault()
        getArticleData()
    })
}
uploadBtn()

async function getArticleData() {
    const username = usernameInputEl.value;
    const title = tileInputEl.value
    const articleText = articleTextEl.value;
    const image = uploadedImageEl.src;
    if(username && title && articleText && image){
        try {
            const response = await axios.post('/api/articles', 
            {
                user_id: username, 
                title: title,
                text: articleText,
                image_string: image
            })
            console.log("article posted: ", response);
            uploadHelpEl.innerText = "Success!"
        } 
        catch(error) {
            console.log("Error occurred uploading article to database: ", error)
            uploadHelpEl.innerText = `Error occurred uploading article to database: ${error}.`
        }
    }else{
        uploadHelpEl.innerText = "Fill out all the fields"
        console.log("Fill out all the fields")
    }
}