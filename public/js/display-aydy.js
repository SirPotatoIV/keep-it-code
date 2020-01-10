/*eslint no-undef: "error"*/
/*eslint-env browser*/
const aydyArticleContainer = document.getElementById("aydyArticleContainer");


//js get requests to display aydy articles to aydy page

async function displayAydy() {
    console.log("displaying aydy articles")
    try {
        let aydyArticlesHtml = "";
        // performs a get request to the backend, which performs a findAll request to the db
        const { data: aydyArticles } = await axios.get("/api/articles/XUTY95IVL5PV4AsD6dF5qq7XFyG2")
        // Loops through mark the articles in the database and creates divs for them
        for (let i = 0; i < aydyArticles.length; i++) {
            const { title, text, image_string } = aydyArticles[i]

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
            aydyArticlesHtml += articleHtml;
        }
        //adds all articles html to article container
        console.log(aydyArticlesHtml);
        aydyArticleContainer.innerHTML = aydyArticlesHtml;

    } catch (err) {
        console.log("Error retrieving articles ", err);
    }
}
displayAydy();