"use strict";
// Dependencies
const express = require(`express`);
const path = require(`path`);

// Set up Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Require database for sync
const db = require(`./models`);
const seed = require(`./seed`);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up static file directory
const assetsPath = path.join(__dirname, `public`);
app.use(express.static(assetsPath));
const nodeModulesPath = path.join(__dirname, `node_modules`);
app.use(express.static(nodeModulesPath));

// Set Handlebars
const expressHandlebars = require(`express-handlebars`);
app.engine(`handlebars`, expressHandlebars({
  defaultLayout: `main`
}));
app.set(`view engine`, `handlebars`);

// Config routes
require(`./routes/navigation-routes`)(app);
require(`./routes/projects-routes`)(app);
require(`./routes/status-api-routes`)(app);
require(`./routes/tasks-routes`)(app);
require(`./routes/teams-routes`)(app);
require(`./routes/users-api-routes`)(app);

// Syncing sequelize models and then starting our Express app
db.sequelize.sync({ force: true })
  .then(() => seed())
  .then(() => {
    app.listen(PORT, () =>
      console.log(`App listening on http://localhost:${PORT}`)
    );
  });
