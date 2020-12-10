import {INSERT_TODO, TOGGLE_TODO} from "./types"

const inisitialState = {
    data : []
}

const reducer = (state = inisitialState, action) => {
switch(action.type){
    case INSERT_TODO :
        return {
            ...state,
            data : [
                ...state.data,
                {
                    id : action.payload.id,
                    content : action.payload.content,
                    complete : false,
                }
            ]
        }
    case TOGGLE_TODO : 
    const {id} = action.payload;
    return{
        ...state,
        data : state.data.map((row) => {
            if (row.id === id){
                return{
                    id : row.id,
                    content : row.content,
                    complete : !row.complete
                }
            }else {return row}
        })
    }
    
    default : return state
}
}

export default reducer;