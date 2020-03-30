import React from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import "./Table.css";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);


function createData(hole, one, two, three, four, five ) {
  return { hole, one, two, three, four, five };
}

const rows = [
  createData('Black', 1,2,3,4,5),
  createData('blackhandicap'),
  createData('blue'),
  createData('bluehandicap'),
  createData('white'),
  createData('whitehandicap'),
  createData('combo'),
  createData('combohandicap'),
  createData('menshandicap'),
  createData('menspar'),
  createData('womenspar'),
  createData('womenshandicap'),
];

const columns = [
  createData()
]

export default function SimpleTable() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <TableContainer  class = "table" component={Paper}>
              <Typography  class = "typo" variant="h1" id="tableTitle">
          Scoreboard
        </Typography>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow class = "hole">
            <TableCell  >Hole</TableCell>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">3</TableCell>
            <TableCell align="center">4</TableCell>
            <TableCell align="center">5</TableCell>
            <TableCell align="center">6</TableCell>
            <TableCell align="center">7</TableCell>
            <TableCell align="center">8</TableCell>
            <TableCell align="center">9</TableCell>
            <TableCell align="center">Out</TableCell>
            <TableCell align="center">10</TableCell>
            <TableCell align="center">11</TableCell>
            <TableCell align="center">12</TableCell>
            <TableCell align="center">13</TableCell>
            <TableCell align="center">14</TableCell>
            <TableCell align="center">15</TableCell>
            <TableCell align="center">16</TableCell>
            <TableCell align="center">17</TableCell>
            <TableCell align="center">18</TableCell>
            <TableCell align="center">In</TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody class = "blue">
        {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center" >
              <TextField id="standard-size-normal"  />
                </TableCell>
              <TableCell align="center">
              <TextField id="standard-size-normal"  />
                </TableCell>
              <TableCell align="center">
              <TextField id="standard-size-normal"  />
                </TableCell>
              <TableCell align="center">
              <TextField id="standard-size-normal"  />
                </TableCell>
              <TableCell align="center">
              <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
