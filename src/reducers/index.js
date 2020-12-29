import {combineReducers} from 'redux';
import {dbDataReducer} from './dbData';
import {idReducer} from './idreducer'


const allReducers = combineReducers({
        dbDataReducer,
        idReducer
})

export default allReducers;