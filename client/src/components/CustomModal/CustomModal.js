import React from 'react';

import Modal from '@material-ui/core/Modal';



const CustomModal = props => {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(true);


  const handleClose = () => {
    setOpen(false)
    props.modalClosed()
  }


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        {props.children}
      </Modal>
    </div>
  )
}

export default CustomModal