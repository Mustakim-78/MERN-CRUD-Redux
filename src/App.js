import {useState, useEffect} from 'react';
import Form from './Form'
import Data from './Data'
import {useSelector, useDispatch} from 'react-redux' 
import {fetchData} from './actions/actions'


import './App.css';

function App() {
  const dispatch = useDispatch();
  const dbData = useSelector(state => state.dbDataReducer)
    useEffect(() => {
        async function getData(){
          dispatch(fetchData())
        }
        getData();
    }, [dbData,dispatch])
  const [currentid,setCurrentId] = useState(null);
  console.log(dbData);
  return (
    <div className="app">
      <h1>Demo MERN App</h1>
      <h3>*Free Hosting and Shared clusters used. So please wait for Data to Load...</h3>
      <Form setCurrentId={setCurrentId} />
      <Data currentid={currentid} setCurrentId={setCurrentId} /> 
    </div>
  );
}
export default App;