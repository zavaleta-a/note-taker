// Setup
const express = require("express");
const require = require("path");

const app = express();
const PORT = 3001;

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Navigate to /notes.html"));

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

app.get("/index", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

// Must be able to write and save notes

// db.json will be used to store and retrieve notes

// use fs module to write and receive notes

// Create routes;
// GET /notes should return notes.html
// GET * should return index.html

// Create API routes;
//  GET /api/notes (should read db.json and return all saved notes)
// POST /api/notes (should receive new note, add it to the db.json,
//  then return the new note)
// give each note a unique id (look into npm package that will do this)
