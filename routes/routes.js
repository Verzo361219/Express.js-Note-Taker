const fs = require('fs')
const path = require('path')




function addNote() {
    fs.writeFile("db.json", json.stringify(notes),err => {
        if(err)
        throw err
        return true
    })
}

module.exports = app => {
    fs.readFile("db.json", "utf-8", (err, data) => {

        if (err) 
        throw err

        var notes = JSON.parse();

        //Route time 
        app.get("/api/notes", function(req, res) {
            res.json(notes)
        })
    })

    app.post("/api/notes", function(req, res) {

    })
}