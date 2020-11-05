const express = require('express')
const app = express()

const PORT = process.env.PORT || 8000
app.use(express.static('public'))
app.use(express.json())

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const routes = require('./controllers/api-routes.js')
const rendeRoutes = require('./controllers/render-routes.js')
app.use(routes)
app.use(rendeRoutes)

app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`)
})
