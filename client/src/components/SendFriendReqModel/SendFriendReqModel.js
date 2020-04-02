import React, {useContext} from 'react'

import SendInviteStyles from "./styles";
// import Modal from '@material-ui/core/Modal'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'
import User from './../../utils/User'
import FriendsContext from '../../utils/FriendsContext'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />
})

const SendFriendReqModel = props => {

  const {rerender} = useContext(FriendsContext)
  const handleClose = () => {
    props.inviteWasClosed()
    setOpen(false)
  }
  const handleSend = () => {
    User.sendFriendRequest(props.user.id)
    .then(({data}) => {
      console.log(data.message)
      setOpen(false)
      props.inviteWasClosed()
    })
  }
  const classes = SendInviteStyles()
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
          <DialogActions>
            <h1>Would you like to send an invite to: {props.user.fname} {props.user.lname}?</h1>
            <Button onClick={handleSend} color="primary">
              Send
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default SendFriendReqModel