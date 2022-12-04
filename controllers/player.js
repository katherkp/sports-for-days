const router = require('express').Router()
const player = require('../models/player.js')
const { db } = require('../models/player')

router.get('/', (req, res) => {
    db.player.find()
        .then((player) => {
            res.render('player/index', { player })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.delete('/:id', (req, res) => {
    db.player.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/player')
    })
    .catch(err => {console.log('err', err)
    res.render('error404')
    })
})

module.exports = router
