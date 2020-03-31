import React from 'react';
import DrawerContext from '../../utils/DrawerContext'
import Appbar from '../../components/Appbar'
import profileStyles from './styles.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';


export default function Profile() {
  const classes = profileStyles();
  const [open, setOpen] = React.useState({ open: false });
  open.handleDrawerOpen = () => {
    setOpen({ open: true });
  };
  open.handleDrawerClose = () => {
    setOpen({ open: false });
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <DrawerContext.Provider value={open}>
      <div className={classes.root}>
        <CssBaseline />
        <Appbar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
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
          </Container>
        </main>
      </div>
    </DrawerContext.Provider>
  );
}