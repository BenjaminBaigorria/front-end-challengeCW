import axios from "axios"
export const SEND_TEXT="SEND_TEXT"


export function sendText(text){
    return async function(dispatch){
        const txt= await axios.get(`https://back-challenge-copywritecol.herokuapp.com/iecho?text=${text}`)
        console.log(txt.data)
        return dispatch({
            type: SEND_TEXT,
            payload:txt.data
        })
    }
}
