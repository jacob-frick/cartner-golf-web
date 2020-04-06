import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({

    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Sports() {
    const classes = useStyles();
    const [searchState, setSearchState] = useState({
        Title: '',
        Content: '',
     })
  
    const  handleInputChange = ({target}) => {
      setSearchState({...searchState, [target.name]:target.value})
    }
    
    const handleOnClick = (event) => {
      event.preventDefault()
      axios.get('https://api.sportsdata.io/golf/v2/json/News', {
          headers: {
            'Ocp-Apim-Subscription-Key': '61441ec3c4414180a2b268bbc53c891d'
          }
      })
      .then(({data}) => {
        console.log(data.Title, data.Content)
        setSearchState({Title: data.Title, Content = data.Content})
       })
      .catch(e => console.error(e))
    }
    return (
        <Container>
              <div className={classes.grow}>
          <AppBar position="static">
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                Current News 
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon/>
                </div>
                <InputBase
                  placeholder="Player"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
                <Button variant="outlined" color = "primary" onClick = {handleOnClick} >News</Button>
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
              </div>
            </Toolbar>
          </AppBar>
        </div>
    
    
        </Container>
  );
}

