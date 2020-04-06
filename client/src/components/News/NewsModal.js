import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import axios from 'axios'
import { Link } from 'react-router-dom';
import SimplePopover from './Popover';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SimpleModal = props => {
  const classes = useStyles();

  const preventDefault = (event) => event.preventDefault();

  const [newsState, setNewsState] = useState({
    articles: []
  })

  useEffect(() => {
    axios.get('https://api.sportsdata.io/golf/v2/json/News', {
      headers: {
        'Ocp-Apim-Subscription-Key': '61441ec3c4414180a2b268bbc53c891d'
      }
    })
      .then(({ data }) => {
        console.log(data)
        setNewsState({ articles: data })
      })
      .catch(e => console.error(e))
  }, [])

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h1 id="simple-modal-title">Letest News!</h1>
      {newsState.articles.map(article => (
        <p id="simple-modal-description">
          {article.Content}
        </p>

      ))
      }
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Letest News
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default SimpleModal