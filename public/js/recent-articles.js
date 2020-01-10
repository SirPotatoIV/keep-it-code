/*eslint no-undef: "error"*/
/*eslint-env browser*/
const slideOne = document.getElementById("slideOne");
const slideTwo = document.getElementById("slideTwo");
const slideThree = document.getElementById("slideThree");
const slideFour = document.getElementById("slideFour");
const slideFive = document.getElementById("slideFive");

//slide counter to point to correct jumbotron object while looping
let slideCounter = 0;

//array of all slide elements
let slideArray = [slideOne, slideTwo, slideThree, slideFour, slideFive];


async function displayArticles() {
  console.log("displaying articles")
  try {
    //let allArticlesHtml = "";
    // performs a get request to the backend, which performs a findAll request to the db
    // how to rename during deconstruction https://wesbos.com/destructuring-renaming/
    // eslint-disable-next-line no-undef
    const { data: allArticles } = await axios.get("/api/articles")
    // Loops through all the articles in the database and creates divs for them

    for (let i = 0; i < 4; i++) {
      let x = 0;
      const { title, text} = allArticles[x]

      const articleHtml = `
      <div class="jumbotron">
      <h1 class="display-4">${title}</h1>
      <p class="lead">${text}</p>
      <hr class="my-4">
      <p>click the button to see more articles</p>
      <a class="btn btn-primary btn-lg" href="/articles" role="button">See More</a>
    </div>
    `
      // console.log("article created"+articleHtml);
      // adds article html to all articles html
      slideArray[slideCounter].innerHTML = articleHtml;
      console.log(slideArray[slideCounter].innerHTML);
      // increases slide counter
      slideCounter += 1;
      //article counter
      i += 1;
    }


  } catch (err) {
    console.log("Error retrieving articles ", err);
  }
}
displayArticles();


