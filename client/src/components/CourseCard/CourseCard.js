import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 200,
  },
})

const Course = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`../assets/courseImages/${props.course._id}.png`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.course.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <Grid container>
              <Grid item xs={12}>{`Par: ${props.course.par}`}</Grid>
              <Grid item xs={12}>{`Blue Tees: ${props.course.length_blue} yards - ${props.course.rating_blue} Rating - ${props.course.slope_blue} Slope`}</Grid>
              <Grid item xs={12}>{`White Tees: ${props.course.length_white} yards - ${props.course.rating_white} Rating - ${props.course.slope_white} Slope`}</Grid>
            </Grid>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" component={Link} to={`/roundCreation/${props.course._id}`}>
          Play Course
        </Button>
      </CardActions>
    </Card>
  )
}

export default Course