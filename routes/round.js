const router = require('express').Router()
const {Round, User} = require('../models')
//create a round
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  //req.body will include course_id, teebox
  //add an owner to the req.body manually
  if(req.user.active_round) {
    res.json({message: 'Already in a round'})
  }
  else{ 
    req.body.owner = req.user._id
    Round.create(req.body)
    .then( () => {
      res.sendStatus(200)
    })
    .catch(e => {
      console.error(e)
      res.sendStatus(400)
    })
  }
})

//invite a player to a round
router.post('/invite/:uid', passport.authenticate('jwt', { session: false }), (req, res) => {
  if(req.params.uid === req.user._id){
    res.json({message: 'Cannot send invite to yourself'})
  }
  else{
    Round.findById(req.user.active_round)
    .then( round => {
      //checking if the person is already a member
      if( round.members.indexOf(req.params.uid)!== -1){
        res.json({message: 'User is already a member of the round'})
      }
      //checking if the person has already received an invite
      else if (round.pending_members.indexOf(req.params.uid) !== -1){
        res.json({message: 'You have already sent an invite to this user'})
      }
      else{
        User.findById(req.params.uid)
        .then( user => {
          //save to round's pending members
          round.pending_members.push(req.params.uid)
          round.save()
          //save to invitee's pending_round_invites
          user.pending_round_invites.push(round._id)
          user.save()
        })
        .catch( e => {
          console.error(e)
          res.sendStatus(400)
        })
      }
    })
    .catch( e => {
      console.error(e)
      res.sendStatus(400)
    })
  }

})


module.exports = router