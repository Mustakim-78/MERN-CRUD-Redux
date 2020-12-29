import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {useSelector, useDispatch} from 'react-redux'
import {setId,deleteUser} from './actions/actions'
import './Data.css';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
function Data({setData,setCurrentId,currentid, setDbData}) {

  const dispatch = useDispatch();
  const dbData = useSelector(state => state.dbDataReducer);
    const classes = useStyles();
    const updateData = (e) =>{
        e.preventDefault(); 
        dispatch(setId(e.target.id));
        // const datatoUpdate = dbData.find((eachdata) => eachdata._id === e.target.id  )
        // setData(datatoUpdate);
    }
    const deleteData = async (e) =>{
        e.preventDefault(); 
        dispatch(deleteUser(e.target.id));
        // e.preventDefault();
        // await axios.delete(`/receive/${e.target.id}`);
        // const newar = dbData.filter((eachdata) => eachdata._id !== e.target.id  )
        // setDbData(newar);
    }

    return (
        <div className="data">
        {dbData ?
             <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Image</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dbData.map((data) => (
              <TableRow id="tblrow" key = {data._id}>
              <TableCell align="left">{data.firstName}</TableCell>
              <TableCell align="left">{data.lastName}</TableCell>
              <TableCell align="left">{data.imageFile ? <img src={data.imageFile} className="displayimg" alt="tempimage" /> :null}</TableCell>
                <TableCell align="center">
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group"> 
                    <Button id={data._id} className="submitbtn"  onClick={updateData}>Update</Button> 
                    <Button id={data._id} className="submitbtn"  onClick={deleteData}>Delete</Button> 
                    </ButtonGroup>
                </TableCell>
            </TableRow>
          ))}
            
        </TableBody>
      </Table>
    </TableContainer> : null }
           
        </div>
    )
}
export default Data

//variant="text" color="primary" aria-label="text primary button group">