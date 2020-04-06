import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}))

// const handleOnClick = (event) => {
//   event.preventDefault()
//   axios.get('https://api.sportsdata.io/golf/v2/json/News', {
//     headers: {
//       'Ocp-Apim-Subscription-Key': '61441ec3c4414180a2b268bbc53c891d'
//     }
//   })
//     .then(({ data }) => {
//       console.log(data)
//       setNewsState({ articles: data })
//     })
//     .catch(e => console.error(e))
//   setAnchorEl(event.currentTarget)
// }

// export default function SimplePopover() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [newsState, setNewsState] = React.useState({
//     articles: []
//   })


//   const handleOnClick = (event) => {
//     event.preventDefault()
//     axios.get('https://api.sportsdata.io/golf/v2/json/News', {
//       headers: {
//         'Ocp-Apim-Subscription-Key': '61441ec3c4414180a2b268bbc53c891d'
//       }
//     })
//       .then(({ data }) => {
//         console.log(data)
//         setNewsState({ articles: data })
//       })
//       .catch(e => console.error(e))
//     setAnchorEl(event.currentTarget)
//   }

//   const handleInputChange = ({ target }) => {

//   }
//   const handleClose = () => {
//     setAnchorEl(null);
//   }
//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

//   return (
//     <PopupState variant="popover" popupId="demo-popup-popover">
//       {(popupState) => (
//         <div>
//           <Button aria-describedby={id} variant="contained" color="primary" onClick={handleOnClick} {...bindTrigger(popupState)}>
//             News
//       </Button>
//           <Popover
//             {...bindPopover(popupState)}
//             id={id}
//             open={open}
//             anchorEl={anchorEl}
//             onClose={handleClose}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'center',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'center',
//             }}
//           >
//             {
//               newsState.articles.map(article => (
//                 <Typography className={classes.typography}>
//                   {article.Title}
//                   {article.Content}
//                 </Typography>
//               ))
//             }
//           </Popover>
//         </div>
//       )}
//     </PopupState>
//   )
// }


export default function SimplePopover() {
  const classes = useStyles();
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
                    {article.Content}
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