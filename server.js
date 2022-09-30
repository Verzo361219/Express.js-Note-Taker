const express = require("express")
const notes = require('./routes/apiRoutes')
const html = require("./routes/htmlRoutes")

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.use('/api', notes)
app.use('/', html)

app.listen(PORT, function() {
    console.log(`App listening at http://localhost:${PORT}`)
})