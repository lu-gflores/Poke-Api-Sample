const express = require('express')


module.exports = function (app) {
    app.get('/api/pokemon', (req, res) => {
        res.send('hey there')
    })

    app.post('/', (req, res) => {
        return res.send('received post method')
    })

    app.put('/', (req, res) => {
        return res.send('received put method')
    })
}