var db = require("../models");

module.exports = {
  // All api routes
  api: function(app) {
    // Get all articles
    app.get("/api/articles", async function(req, res) {
      try {
        const allArticles = await db.Articles.findAll();
        res.json(allArticles);
      } catch (err) {
        console.log("Error occurred trying to get all articles: ", err);
      }
    });

    app.post("/api/articles", async function(req, res) {
      // const {userId, title, text} = req.body;
      try {
        // const response = await db.Articles.create({user_id: userId, title: title, text: text});
        console.log("Response from creating an article: ", req.body);
        res.json("post recieved");
      } catch (err) {
        console.log("Error ocurred creating an article: ", err);
      }
    });

    // Get all subscribers
    app.get("/api/subscribers", async function(req, res) {
      try {
        const allSubscribers = await db.Subscribers.findAll();
        res.json(allSubscribers);
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
