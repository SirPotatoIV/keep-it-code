/*eslint no-undef: "error"*/
/*eslint-env browser*/
const slideOne = document.getElementById("slideOne");
const slideTwo = document.getElementById("slideTwo");
const slideThree = document.getElementById("slideThree");
const slideFour = document.getElementById("slideFour");
const slideFive = document.getElementById("slideFive");
let slideCounter = 0;
//js get requests to display all articles to articles.html
let slideArray = [
  { slideOne },
  { slideTwo },
  { slideThree },
  { slideFour },
  { slideFive },
];


async function displayArticles() {
  console.log("displaying articles")
  try {
    //let allArticlesHtml = "";
    // performs a get request to the backend, which performs a findAll request to the db
    // how to rename during deconstruction https://wesbos.com/destructuring-renaming/
    // eslint-disable-next-line no-undef
    const { data: allArticles } = await axios.get("/api/articles")
    // Loops through all the articles in the database and creates divs for them

    for (let i = allArticles.length - 5; i < allArticles.length; i++) {
      const { title, text, image_string } = allArticles[i]

      const articleHtml = `
      <div class="jumbotron">
      <h1 class="display-4">${title}</h1>
      <p class="lead">${text}</p>
      <hr class="my-4">
      <p>click the button to see more articles</p>
      <a class="btn btn-primary btn-lg" href="/articles" role="button">See More</a>
    </div>
    `

      // adds article html to all articles html
      slideArray[slideCounter].innerHTML = articleHtml;
      // increases slide counter
      slideCounter += 1;
    }


  } catch (err) {
    console.log("Error retrieving articles ", err);
  }
}
displayArticles();


