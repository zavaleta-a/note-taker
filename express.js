// Need a landing page with a link to the notes page
// db.json will be used to store and retrieve notes
// give each note a unique id (look into npm package that will do this)

// Setup
const express = require("express");
const path = require("path");
const data = require("./develop/db/db");

// Must be able to write and save notes (use fs module to write and receive notes)
const fs = require("fs");
// linking routes
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "develop/public")));

// Data parsing (middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
//---------------------------------------

// Set up listener to PORT
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
