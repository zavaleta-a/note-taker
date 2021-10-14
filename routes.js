const express = require("express");

const router = express.Router();

const path = require("path");

const fs = require("fs");
// Create routes;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./develop/public/index.html"));
});
// GET /notes should return notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./develop/public/notes.html"));
});

//---------------------------------

// Create API routes;

//  GET /api/notes (should read db.json and return all saved notes)
router.get("/api/notes", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./develop/db/db.json"));
  res.json(notes);
  console.log("si");
});
// POST /api/notes (should receive new note, add it to the db.json, then return the new note)
router.post("/api/notes", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./develop/db/db.json"));
  let newNote = req.body;
  let id = notes.push(newNote);
  updateDb(notes);
  console.log("new note added!");
  res.json(notes);
});

// update json with new notes
function updateDb(notes) {
  fs.writeFile("./develop/db/db.json", JSON.stringify(notes), (err) => {
    if (err) throw err;
    return true;
  });
}

// delete route
// app.delete(`/api/notes/${$noteId}`, function (req, res) {
//   console.log("note deleted!");
//   res.send("Note deleted");
// });

// GET * should return index.html
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./develop/public/index.html"));
});

module.exports = router;
