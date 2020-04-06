import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import SimpleModal from './NewsModal.js'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}))

const  SimplePopover = () =>{
  const classes = useStyles();
  const [newsState, setNewsState] = useState({
    articles: []
  })
  const [contentState, setContentState] = useState({
    contents: []
  })

  const handleOnClick = (event) => {
    return(
      <SimpleModal/>
    )
  }

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
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
            Breaking News!!
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              {
                newsState.articles.map(article => (
                  <Typography className={classes.typography}>
                    {article.Title}
                    <br></br>
                    {article.Url}
                    <button onClick = {handleOnClick} >
                     Link
                    </button>

                    <br></br>
                  </Typography>
                ))
              }
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
export default SimplePopover