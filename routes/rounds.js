const router = require('express').Router()
const {Round, User} = require('../models')
const passport = require('passport')

//create a round
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  //req.body will include course_id, teebox

  //check if the user has an active round already
  if(req.user.active_round) {
    res.json({message: 'Already in a round'})
  }
  else{ 
    //add an owner to the req.body manually
    req.body.owner = req.user._id
    Round.create(req.body)
    .then( createdRound => {
      //set the created round as the user's active round
      req.user.active_round = createdRound._id
      //saving owner into members array. NOTE, will need to change how we push to members array later as each member needs a user_id and score
      createdRound.members.push(req.user._id)
      createdRound.save()
      req.user.save()
      res.sendStatus(200)
    })
    .catch(e => {
      console.error(e)
      res.sendStatus(400)
    })
  }
})

//get a user's pending round invites
router.get('/users/pending', passport.authenticate('jwt', { session: false }), (req, res) => {
  //NOTE, will have to populate with course_id as well to get course name later on
  User.findById(req.user._id).populate({path: 'pending_round_invites', select: ['course_id','owner'], populate: { path: 'owner', select: ['fname', 'lname']}})
  .then( user => {
    res.json(user.pending_round_invites)
  })
  .catch(e => {
    console.error(e)
    res.sendStatus(400)
  })
})

//invite a player to a round
router.put('/invite/:uid', passport.authenticate('jwt', { session: false }), (req, res) => {

  if(req.params.uid === req.user._id.toString()){
    res.json({message: 'Cannot send an invite to yourself'})
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
          res.sendStatus(200)
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