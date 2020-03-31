import React from 'react'

import WelcomeModalStyles from "./styles";
// import Modal from '@material-ui/core/Modal'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />
})

export default function WelcomModel() {
  const handleClose = () => {
    setOpen(false)
  }
  const classes = WelcomeModalStyles()
  // getWelcomeModalStyles is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(true)

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={classes.dialogStyle}
      >
        <DialogContent>
          <div>
            <h2 id="simple-modal-title">Welcome to Cartner-Golf!</h2>
            <p id="simple-modal-description">
              With this application you can keep track of your scores, stats, handicaps, and add friends to matches in order to use the app to track current games.
          </p>
            <p>
              Use the navbar on the left to explore the various other features of this app.
          </p>
            <h2 id="simple-modal-title">Happy Golfing!</h2>
          </div>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Okay!
          </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  )
}
