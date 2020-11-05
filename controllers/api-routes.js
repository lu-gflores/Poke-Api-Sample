const express = require('express')
const axios = require('axios')

//creating modular route handlebars
const router = express.Router()
const url = 'https://pokeapi.co/api/v2/pokemon/'


//GET method for retrieving all pokemon data

router.get('/api/pokemon', (req, res) => {
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
//Get specific pokemon by name
router.get('/api/pokemon/:name', (req, res) => {
    axios.get(url, {
        params: {
            abilities: req.query.abilities,
            height: req.query.height,
            moves: req.query.moves,
        }
    }).then((response) => {
        console.log(response)
        res.json(response.data.abilities)
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