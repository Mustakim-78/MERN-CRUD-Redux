export const dbDataReducer = (state = [], action) => {
    switch (action.type){
        case 'FETCHDATA':
            return state = action.payload
        case 'INSERT':
            return [...state,action.payload];
        case 'UPDATE':
            return state.map((eachdata) => eachdata._id === action.payload.id ? action.payload : eachdata)
        case 'DELETE':
            return state.filter((eachdata) => eachdata._id !== action.payload.id)
        default:
            return state;
    }
}