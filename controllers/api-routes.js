const { response, request, json } = require('express')
const express = require('express')
const axios = require('axios')
//creatining modular route handlebars
const router = express.Router()
const url = 'https://pokeapi.co/api/v2/pokemon/'


//GET method for retrieving all pokemon data

router.get('/api/search', (req, res) => {
    axios.get(url, {
        params: {
            name: req.query.results
        }
    }).then((response) => {
        res.json(response.data.results)
    }).catch(err => {
        res.status(404).json(err)
        console.log('error: ' + err)
    })

})
// router.post('/:name', (req, res) => {
//     return res.send('received post method')
// })

router.put('/pokemon/:pokemonId', (req, res) => {
    return res.send('received put method')
})

module.exports = router