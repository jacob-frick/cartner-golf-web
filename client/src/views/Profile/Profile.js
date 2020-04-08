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

      </OuterNavbar>
    )
  } else if (authStatus === 'NO_AUTH') {
    return (<Redirect to='/' />)
  } else {
    return (<p></p>)
  }
}
export default Profile