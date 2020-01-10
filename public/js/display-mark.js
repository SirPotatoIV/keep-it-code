/*eslint no-undef: "error"*/
/*eslint-env browser*/
const markArticleContainer = document.getElementById("markArticleContainer");


//js get requests to display mark articles to mark's page

async function displayMark() {
    console.log("displaying mark articles")
    try {
        let markArticlesHtml = "";
        // performs a get request to the backend, which performs a findAll request to the db
              // eslint-disable-next-line no-undef
        const { data: markArticles } = await axios.get("/api/articles/fQFWazp9rWSYdFVUjIYLoVL1hsk1")
        // Loops through mark the articles in the database and creates divs for them
        for (let i = 0; i < markArticles.length; i++) {
            const { title, text, image_string } = markArticles[i]

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
            markArticlesHtml += articleHtml;
        }
        //adds all articles html to article container
        console.log(markArticlesHtml);
        markArticleContainer.innerHTML = markArticlesHtml;

    } catch (err) {
        console.log("Error retrieving articles ", err);
    }
}
displayMark();