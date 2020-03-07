"use strict";
const express = require(`express`);
const app = express();
const PORT = process.env.PORT || 3000;
const db = require(`./models`);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));
const expressHandlebars = require(`express-handlebars`);
app.engine(`handlebars`, expressHandlebars({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
  );
});
