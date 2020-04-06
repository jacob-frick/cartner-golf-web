import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import User from './../../utils/User'
import TextField from '@material-ui/core/TextField'
import SendFriendReqModel from './../SendFriendReqModel'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  searchIcon: {
    marginTop: '8px'
  },
  buttonHeight: {
    color: 'white',
    border: '1px solid rgba(63, 151, 181, 0.5)',
    height: '50px',
    width: 'calc(100% - 10vh)',
    padding: '0 30px',
    background: 'green',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 135, .3)',
    marginTop: '14px',
    borderRadius: '3px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    minWidth: 'fit-content',
  }
}))

const SearchBar = () => {
  const classes = useStyles()
  const [value, setValues] = React.useState({
    searchVal: '',
    error: false,
    errorMessage: ''
  })
  const [inviteModel, setModel] = React.useState(<></>)

  const handleChange = (prop) => (event) => {
    setValues({ ...value, [prop]: event.target.value, error: false, errorMessage: '' })
  }
  const onSubmit = event => {
    event.preventDefault()
    if (value.searchVal === '') {
      setValues({ ...value, error: true, errorMessage: 'Please enter a value to search' })
    }
    else {
      User.findUser(value.searchVal)
        .then(({ data }) => {
          console.log(data)
          if (data.message) {
            setValues({ ...value, error: true, errorMessage: data.message })
          } else {
            const model = <SendFriendReqModel inviteWasClosed={inviteWasClosed} user={data} />
            setModel(model)
          }
        })
    }
  }
  const inviteWasClosed = () => {
    setModel(<></>)
  }
  return (
    <FormControl fullWidth className={classes.margin} variant="outlined" >
      <Grid container spacing={3}>
        {inviteModel}
        <Grid item sm={10} xs={12}>
          <TextField
            error={value.error}
            helperText={value.errorMessage}
            variant="outlined"
            margin="normal"
            fullWidth
            name="searchVal"
            label={<InputAdornment className={classes.searchIcon} position="start"><SearchIcon />Search</InputAdornment>}
            type="text"
            id="searchVal"
            onChange={handleChange('searchVal')}
          />
        </Grid>
        <Grid item sm={2} xs={12}>
          <Button
            className={classes.buttonHeight}
            variant="contained"
            fullWidth
            color="primary"
            onClick={onSubmit}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </FormControl >
  )
}

export default SearchBar