
import { SEND_TEXT } from "../actions";

const initialState={
    texts:[]
}

export default function textReducer(state=initialState,action){
    switch (action.type) {
        case SEND_TEXT:
            return{
              ...state,
              texts:[...state.texts,action.payload]
            }
    
        default:
            return{
                ...state
            }
    }
}