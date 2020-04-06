const router = require('express').Router()
const {Round, User, Course} = require('../models')
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
      createdRound.members.push({user_id: req.user._id, scores: []})
      createdRound.save()
      req.user.save()
      res.json({roundId: createdRound._id})
    })
    .catch(e => {
      console.error(e)
      res.sendStatus(400)
    })
  }
})
router.get('/full/:rid', passport.authenticate('jwt', { session: false }), (req, res) => {
  Round.findById(req.params.rid)
  .populate({path: 'members.user_id', select: ['fname', 'lname']})
  .populate('course_id')
  .then( round => {
    if(!round) res.sendStatus(404)
    else {
      res.json(round)
    }
  })
  .catch(() => res.sendStatus(401))
})
//get a user's pending round invites
router.get('/users/pending', passport.authenticate('jwt', { session: false }), (req, res) => {
  //NOTE, will have to populate with course_id as well to get course name later on
  User.findById(req.user._id, 'active_round pending_round_invites').populate({path: 'pending_round_invites', select: ['course_id','owner'], populate: { path: 'owner', select: ['fname', 'lname']}})
  .then( user => {
    res.json(user)
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

//accept a round invite. takes in a round id
router.put('/accept/:rid', passport.authenticate('jwt', { session: false }), (req, res) =>{
  if(req.user.active_round){
    res.json({message: 'Please complete your current round before joining another'})
  }
  else{
    Round.findById(req.params.rid)
    .then( round => {
      //push to members array in round
      round.members.push(req.user._id)
      //remove from pending_members array
      round.pending_members.splice(round.pending_members.indexOf(req.user._id), 1)
      round.save()
      //set user's active round to round's id
      req.user.active_round = round._id
      //remove from user's pending_round_invites array
      req.user.pending_round_invites.splice(req.user.pending_round_invites.indexOf(round._id), 1)
      req.user.save()
      res.sendStatus(200)
    })
    .catch( e => {
      console.error(e)
      res.sendStatus(400)
    })
  }
})

//decline a round invite. takes in a round id
router.put('/decline/:rid', passport.authenticate('jwt', { session: false }), (req, res) =>{
  Round.findById(req.params.rid)
    .then( round => {
      //remove from round's pending_members array
      round.pending_members.splice(round.pending_members.indexOf(req.user._id), 1)
      round.save()
      //remove from user's pending_round_invites array
      req.user.pending_round_invites.splice(req.user.pending_round_invites.indexOf(round._id), 1)
      req.user.save()
      res.sendStatus(200)
    })
    .catch( e => {
      console.error(e)
      res.sendStatus(400)
    })
})

module.exports = router