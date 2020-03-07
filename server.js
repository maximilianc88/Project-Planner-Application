"use strict";
const express = require(`express`);
const app = express();
const PORT = process.env.PORT || 3000;
const db = require(`./models`);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
  );
});

