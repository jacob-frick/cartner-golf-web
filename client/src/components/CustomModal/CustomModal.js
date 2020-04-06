import React from 'react'

import CustomStyles from "./styles";
// import Modal from '@material-ui/core/Modal'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />
})

const CustomModal = props => {

  const handleClose = () => {
    props.modalClosed()
    setOpen(false)
  }

  const classes = CustomStyles()
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
        className={classes.dialogStyle+classes.test}
      >
        <DialogContent>
          {props.children}
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default CustomModal