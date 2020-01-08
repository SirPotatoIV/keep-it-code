var db = require("../models");

module.exports = {
  // All api routes
  api: function(app) {
    // Get all articles
    app.get("/api/articles", async function(req, res) {
      try {
        // performs a find all in the table Articles
        const allArticles = await db.Articles.findAll();
        // returns all the found articles to the requester
        res.json(allArticles);
      } catch (err) {
        console.log("Error occurred trying to get all articles: ", err);
      }
    });

    // Create a new article
    app.post("/api/articles", async function(req, res) {
      // Deconscruted to better illustrate values are needed to update the table where articles are stored
      const { userId, title, text } = req.body;
      try {
        // Creates a new row in the table Articles with all the values for the new article
        const response = await db.Articles.create({
          user_id: userId,
          title: title,
          text: text
        });
        // Sends response from database back to the frontend
        res.json(
          `The article with the title: ${response.title} was created with id ${response.id}`
        );
      } catch (err) {
        console.log("Error ocurred creating an article: ", err);
      }
    });

    // Delete an article
    app.delete("/api/articles", async function(req, res) {
      // Deconsructing req.body so it is more clear what information is needed to delete an article
      const { articleId } = req.body;
      try {
        // performs a delete in the Articles table based on the articleId
        const response = await db.Articles.destroy({
          where: { id: articleId }
        });
        // sends the number of articles deleted to the requester
        res.json(`${response} article(s) deleted`);
      } catch (err) {
        console.log("Error occurred deleting an article: ", err);
      }
    });

    // Get all subscribers
    app.get("/api/subscribers", async function(req, res) {
      try {
        // performs a find all for the subscribers table
        const allSubscribers = await db.Subscribers.findAll();
        // sends all the subscribers found to the requester.
        res.json(allSubscribers);
      } catch (err) {
        console.log("Error occurred trying to get all articles: ", err);
      }
    });

    // Create a subscriber
    app.post("/api/subscribers", async function(req, res) {
      const { firstName, lastName, email } = req.body;
      console.log(firstName, lastName, email);
      try {
        // performs a find all for the subscribers table
        const response = await db.Subscribers.create({
          first_name: firstName,
          last_name: lastName,
          email: email
        });
        // sends all the subscribers found to the requester.
        res.json(
          `Subscriber ${response.first_name} ${response.last_name} has been added.`
        );
      } catch (err) {
        console.log("Error occurred trying to get all articles: ", err);
      }
    });
    // Keeping code below from template as reference for now. Not part of actual project
    //======================================
    //
    //
    app.get("/api/examples", function(req, res) {
      db.Example.findAll({}).then(function(dbExamples) {
        res.json(dbExamples);
      });
    });

    // Get an example
    app.get("/api/examples/:id", function(req, res) {
      console.log({ id: req.params.id });
      db.Example.findAll({ where: { id: req.params.id } }).then(function(
        dbExamples
      ) {
        console.log(dbExamples);
        res.json(dbExamples[0]);
      });
    });

    // Create a new example
    app.post("/api/examples", this.postExampleApi);

    // Delete an example by id
    app.delete("/api/examples/:id", function(req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function(
        dbExample
      ) {
        res.json(dbExample);
      });
    });
  },
  postExampleApi: async function(req, res) {
    const dbExample = await db.Example.create(req.body);
    res.json(dbExample);
  }
};
