import React, {useContext} from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import RoundContext from '../../utils/RoundContext'
import summaryStyles from './style.js'


const Summary = props => {
  const classes = summaryStyles()
  const {memberContext} = useContext(RoundContext)
  let {round: {members}} = props
  let heading = ['Name', 'Handicap', 'Total']
  return (
      <Container maxwidth='lg' className={classes.min}>
        <Paper elevation={3}>
          <List>
            <div className={classes.root}>
              <Grid container spacing={3} className={classes.padBot}>
                <ListItem>
                  <Grid item xs={12}>
                    <Typography className={`${classes.center} ${classes.underline}`} variant="h6" gutterBottom>
                      Summary
                </Typography>
                  </Grid>
                </ListItem>
                <ListItem>
                {heading.map(title => <Grid item xs={4} className={`${classes.center} ${classes.underline}`} >{title}</Grid>)}
                </ListItem>
                <Divider />
                {members.map( (person, i) => 
                  <ListItem>
                    <Grid item xs={4} className={classes.center} >{`${person.user_id.fname} ${person.user_id.lname}`}</Grid>
                    <Grid item xs={4} className={classes.center} >{`${person.user_id.fname}'s Handicap`}</Grid>
                    <Grid item xs={4} className={classes.center} >{memberContext[i].total_back + memberContext[i].total_front}</Grid>
                  </ListItem>
                )}
                {/* End summary mapping */}
              </Grid>
            </div>
          </List>
        </Paper>
      </Container>
  )
}

export default Summary