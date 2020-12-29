export const idReducer = (state = null, action) => {
    switch (action.type){
        case 'SETID':
            return state = action.payload;
        default:
            return state;
    }
}