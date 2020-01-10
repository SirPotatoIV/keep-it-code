/*eslint no-undef: "error"*/
/*eslint-env browser*/
const jakeArticleContainer = document.getElementById("jakeArticleContainer");


//js get requests to display jake articles jake page
async function displayJake() {
    console.log("displaying jake articles")
    try {
        let jakeArticlesHtml = "";
        // performs a get request to the backend, which performs a findAll request to the db
        const { data: jakeArticles } = await axios.get("/api/articles/ox0beoxSIHUdi24efAGVJSUncBT2")
        // Loops through mark the articles in the database and creates divs for them
        for (let i = 0; i < jakeArticles.length; i++) {
            const { title, text, image_string } = jakeArticles[i]

            const articleHtml = `<div class="card my-5">
                <div class="card-header">
                  ${title}
                </div>
                <div class="card-body">
                  <div>
                    <p>${text}</p>
                  </div>
                  <div>
                    <img src="${image_string}"/>
                  </div>
                </div>
              </div>`

            // adds article html to all articles html
            jakeArticlesHtml += articleHtml;
        }
        //adds all articles html to article container
        console.log(jakeArticlesHtml);
        jakeArticleContainer.innerHTML = jakeArticlesHtml;

    } catch (err) {
        console.log("Error retrieving articles ", err);
    }
}
displayJake();