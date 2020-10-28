const express = require('express')
const app = express()

const PORT = process.env.PORT || 8000
app.use(express.static('public'))
app.use(express.json())

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

require('./controllers/api-routes.js')(app)


app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`)
})
