/*eslint no-undef: "error"*/
/*eslint-env browser*/
const articleContainer = document.getElementById("articleContainer");

//js get requests to display all articles to articles.html

async function displayArticles() {
    console.log("displaying articles")
    try {
        let allArticlesHtml = "";
        // performs a get request to the backend, which performs a findAll request to the db
        // how to rename during deconstruction https://wesbos.com/destructuring-renaming/
              // eslint-disable-next-line no-undef
        const { data: allArticles } = await axios.get("/api/articles")
        // Loops through all the articles in the database and creates divs for them
        for (let i = 0; i < allArticles.length; i++) {
            const { title, text, image_string } = allArticles[i]

            const articleHtml = `<div class="card my-5">
            <div class="card-header">
              ${title}
            </div>
            <div class="card-body">
            <div>
                <img src="${image_string}"/>
              </div>
              <div>
                <p>${text}</p>
              </div>
              
            </div>
          </div>`

            // adds article html to all articles html
            allArticlesHtml += articleHtml;
        }
        //adds all articles html to article container
        console.log(allArticlesHtml);
        articleContainer.innerHTML = allArticlesHtml;

    } catch (err) {
        console.log("Error retrieving articles ", err);
    }
}
displayArticles();






