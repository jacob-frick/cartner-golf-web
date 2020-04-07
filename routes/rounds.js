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
      let score = []
      for(let i = 1; i < 19; i++) {
        score.push({
          hole_num: i,
          score: 0
        })
      }
      User.find({_id: {$in: createdRound.pending_members}})
      .then(users => {
        users.forEach(element => {
          element.pending_round_invites.push(createdRound._id)
          element.save()
        })
        createdRound.members.push({user_id: req.user._id, score})
        createdRound.save()
        req.user.save()
        res.json({roundId: createdRound._id})
      })

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

//get user's current round
router.get('/users/currentround', passport.authenticate('jwt', { session: false }), (req, res) => {
  //will need to populate with course_id to get course name later
  User.findById(req.user._id).populate({path: 'active_round'})
  .then( user => {
    res.json(user.active_round)
  })
  .catch(e => {
    console.error(e)
    res.sendStatus(400)
  })
})

//get a user's past rounds
router.get('/users/pastrounds', passport.authenticate('jwt', { session: false }), (req, res) => {


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
      let score = []
      for(let i = 1; i < 19; i++) {
        score.push({
          hole_num: i,
          score: 0
        })
      }
      //push to members array in round
      round.members.push({
        user_id: req.user._id,
        score
      })
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

//save a round
router.put('/save/:rid', passport.authenticate('jwt', { session: false }), (req, res) => {

  Round.findById(req.params.rid)
  .then( round => {
    for(let i = 0; i<req.body.length; i++){
      round.members[i].score = req.body[i].score
    }
    round.save()
    res.sendStatus(200)
  })
  .catch( e => {
    console.error(e)
    res.sendStatus(400)
  })
})

//complete a round
router.get('/complete/:rid', passport.authenticate('jwt', { session: false }), (req, res) => {
  let members
  Round.findById(req.params.rid).populate({path: 'members.user_id', select: ['fname', 'lname','active_round', 'past_rounds']})
  .then( round => {
    round.members.forEach(member => {
      //push into each member's past_rounds
      member.user_id.past_rounds.push(round._id)
      //set each member's active_round to null
      member.user_id.active_round = null
      member.user_id.save()
    })
    res.json(round.members)

  })
  .catch(e => {
    console.error(e)
    res.json(400)
  })
  // Round.findById(req.params.rid)
  //   .then(round => {
  //     for (let i = 0; i < req.body.length; i++) {
  //       round.members[i].score = req.body[i].score
  //     }
  //     round.save()
  //     //save all the info in the round

  //   })
  //   .catch(e => {
  //     console.error(e)
  //     res.sendStatus(400)
  //   })
})

module.exports = router