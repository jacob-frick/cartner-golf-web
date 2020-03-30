import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./Table.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(player, strokes, hole, putts, par, total) {
  return { player, strokes, hole, putts, par, total };
}

const rows = [
  createData('Player1'),
  createData('Player2'),
];

export default function SimpleTable() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <TableContainer class= "table" component={Paper}>
              <Typography  class = "typo" variant="h1" id="tableTitle">
          Scoreboard
        </Typography>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align="center">Strokes</TableCell>
            <TableCell align="center">Hole</TableCell>
            <TableCell align="center">Putts</TableCell>
            <TableCell align="center">Par</TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              <TextField id="filled-basic" label="Player" variant="filled" />
              </TableCell>
              <TableCell align="center" >
              <TextField id="filled-basic" label="Strokes" variant="filled" />
                </TableCell>
              <TableCell align="center">
              <TextField id="filled-basic" label="Hole" variant="filled" />
                </TableCell>
              <TableCell align="center">
              <TextField id="filled-basic" label="Putts" variant="filled" />
                </TableCell>
              <TableCell align="center">
              <TextField id="filled-basic" label="Par" variant="filled" />
                </TableCell>
              <TableCell align="center">
              <TextField id="filled-basic" label="Total" variant="filled" />
                </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
