const fs = require('fs')
const path = require('path')

module.exports = app => {
    fs.readFile("db/db.json", "utf-8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);

        function addNote() {
            fs.writeFile("db/db.json", JSON.stringify(notes),err => {
                if(err) throw err;
                return true;
            });
        };

        //View Routes
        app.get('/notes', function(req, res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });

        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });


        //Routes
        app.get("/api/notes", function(req, res) {
            res.json(notes)
        });

        app.post("/api/notes", function(req, res) {
            var createNote = req.body;
            notes.push(createNote);
            addNote();

        });

       
    });
};

   