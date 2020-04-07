import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import OuterNavbar from './../../components/OuterNavbar'
import profileStyles from './styles.js'
import Authorization from './../../utils/Authorization'
import { Redirect } from 'react-router-dom'
const Profile = () => {
  const classes = profileStyles()
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
  const [authStatus, setAuth] = React.useState('NONE')


  if (authStatus === 'NONE') {
    Authorization.auth()
      .then(res => {
        if (res.status === 200) {
          setAuth('AUTH')
        } else {
          setAuth('NO_AUTH')
        }
      })
  }

  if (authStatus === 'AUTH') {
    return (
      <OuterNavbar>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <Typography className={classes.heading}>Your Average Par</Typography>
            <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Average Par: +3
               </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header">
            <Typography className={classes.heading}>Handicap</Typography>
            <Typography className={classes.secondaryHeading}>
              Your Current Handicap Level
               </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Handicap: Par + 3
                </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header">
            <Typography className={classes.heading}>Last Session Stats</Typography>
            <Typography className={classes.secondaryHeading}>
              Pebble Beach Course 18 Holes
                </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Par 4 Total
               </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header">
            <Typography className={classes.heading}>Personal Data & Stats</Typography>
            <Typography className={classes.secondaryHeading}>All About You</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Personal Data About You and your stats
                </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </OuterNavbar>
    )
  } else if (authStatus === 'NO_AUTH') {
    return (<Redirect to='/' />)
  } else {
    return (<p></p>)
  }
}
export default Profile