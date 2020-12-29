import axios from '../axios'
export const fetchData  = () => async (dispatch) => {
    const {data} = await axios.get('/');
    dispatch({
        type : "FETCHDATA",
        payload : data
    })
}
export const createUser  = (user) => async (dispatch) => {
    const {data} = await axios.post('/receive',user);
    dispatch({
        type : "INSERT",
        payload : data
    })
}
export const updateUser  = (id,user) => async (dispatch) => {
    const {data} = await axios.patch(`/receive/${id}`,user);
    dispatch({
        type : "UPDATE",
        payload : data
    })
}
export const deleteUser  = (id) => async (dispatch) => {
    const {data} = await axios.delete(`/receive/${id}`);
    dispatch({
        type : "DELETE",
        payload : data
    })
}
export const setId  = (id)  => {
    return{
        type : "SETID",
        payload : id
    }
}
