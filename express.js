// Need a landing page with a link to the notes page
// db.json will be used to store and retrieve notes
// give each note a unique id (look into npm package that will do this)

// Setup
const express = require("express");
const path = require("path");
const data = require("./develop/db/db.json");
// Must be able to write and save notes (use fs module to write and receive notes)
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "develop/public")));

// Data parsing (middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//---------------------------------------

// Create routes;

// GET /notes should return notes.html
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "develop/public/notes.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "develop/public/index.html"));
});

// GET * should return index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "develop/public/index.html"));
});

//---------------------------------

// Create API routes;

//  GET /api/notes (should read db.json and return all saved notes)
app.get("/api/notes", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./develop/db/db.json"));
  res.json(notes);
});
// POST /api/notes (should receive new note, add it to the db.json, then return the new note)
app.post("/api/notes", (req, res) => {
  let newNote = req.body;
  notes.push(newNote);
  updateDb();
  console.log("new note added!");
});

// update json with new notes
function updateDb() {
  fs.writeFile("./develop/db/db.json", JSON.stringify(notes), (err) => {
    if (err) throw err;
    return true;
  });
}
// Set up listener to PORT
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
