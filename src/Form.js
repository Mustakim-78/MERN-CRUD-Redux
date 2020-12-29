import React,{useState,useEffect} from 'react'
import FileBase from 'react-file-base64'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import {useSelector,useDispatch} from 'react-redux'
import {createUser,setId, updateUser} from './actions/actions'
import './Form.css'

function Form() {
    
    const tid = useSelector(state => state.idReducer);
  const dispatch = useDispatch();
  const [data,setData] = useState({firstName:'',lastName:'',imageFile:''})
  const updateData = useSelector((state) => tid ? state.dbDataReducer.find((d) =>d._id === tid) : null)
  useEffect(() => {
      if(tid)
        setData(updateData);
  }, [updateData,tid])
  const sendData = async (e) =>{
    e.preventDefault();
    if(!tid){
        dispatch(createUser(data));
        setData({firstName:'',lastName:'',imageFile:''});
        console.log(data);
    }
    else{
        dispatch(updateUser(tid,data));
        

        // const response = await axios.patch(`/receive/${currentid}`,data);
        // //setDbData([...dbData,response.data])
        // // setDbData(dbData.map((eachdata) => data._id === response.data._id ? response.data : eachdata))
        // const newar = dbData.map((eachdata) => eachdata._id === response.data._id ? response.data : eachdata)
        // //setDbData(newar);
        // // setDbData(dbData.map((eachdata) => {
        // //     if(data._id === response.data._id)
        // //         return response.data;
        // //     else
        // //         return eachdata;
        // // }));
    }
    clear();
  }
  function clear(){
      
      dispatch(setId(null));
  }
    return (
        <div className="com">
            <form className="form"  noValidate autoComplete="off">
                <TextField id="standard-basic" label="First Name" className="fname" value={data.firstName} onChange = {(e)=>setData({...data,firstName:e.target.value})} />
                <TextField id="standard-basic" label="Last Name" className="lname" value={data.lastName} onChange = {(e)=>setData({...data,lastName:e.target.value})} />
                <FileBase  className="file" type="file" multiple={false} onDone={({base64}) => setData({...data,imageFile:base64})} />
                <Button id="tempid" className="submitbtn" variant="contained" color="primary" onClick={sendData} value="Primary">Submit</Button>
            </form>
        </div>
    )
}

export default Form
