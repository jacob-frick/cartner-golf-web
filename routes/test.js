const router = require('express').Router()

router.get('/another', (req, res) => {
  res.json({message: 'test'})
})  

module.exports = router