// Need a landing page with a link to the notes page
// db.json will be used to store and retrieve notes
// give each note a unique id (look into npm package that will do this)

// Setup
const express = require("express");
const path = require("path");
const data = require("./Develop/db/db");
// Must be able to write and save notes (use fs module to write and receive notes)
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "Develop", "public")));

// Data parsing (middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//---------------------------------------

// Create routes;
app.get("./public/.notes.html", (req, res) => {
  res.send("Navigate to /notes.html");
});
// GET /notes should return notes.html
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

// GET * should return index.html
app.get("*", (req, res) => {
  res.sendFile(path.join__dirname, "/Develop/public/index.html");
});

//---------------------------------

// Create API routes;

//  GET /api/notes (should read db.json and return all saved notes)
app.get("/api/notes", (req, res) => {
  res.json(data);
});
// POST /api/notes (should receive new note, add it to the db.json, then return the new note)
app.post("/api/notes", (req, res) => {
  let newNote = req.body;
  notes.push(newNote);
  updateDb();
  console.log("new note added!");
});

app.get("/api/notes/:id", (req, res) => {
  res.json(ntoes[req.params.id]);
});

// update json with new notes
function updateDb() {
  fs.writeFile("db/db.json", JSON.stringify(notes, "/t"), (err) => {
    if (err) throw err;
    return true;
  });
}
// Set up listener to PORT
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
