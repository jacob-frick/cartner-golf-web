import React from 'react'
import Roundcard from './../../components/RoundCard'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles(() => ({
  minWid: {
    minWidth: 650
  }

}))
const RoundHistoryExpansPanel = props => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  if(props.rounds.length > 0)
  return (
    props.rounds.map(elem => {
      return (
        <ExpansionPanel className={classes.minWid} expanded={expanded === elem._id} onChange={handleChange(elem._id)} key={'roundcard' + elem._id}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <Grid container>
              <Grid item xs={12}>
                <Typography >Course: {elem.course_id.name}</Typography>
              </Grid>
              {/* <Grid item xs={12}>
                <Typography >I am an expansion panel</Typography>
              </Grid> */}
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Roundcard round={elem} isHistory={true} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    })
  )
  else return (<p>No past rounds to display</p>)

}

export default RoundHistoryExpansPanel