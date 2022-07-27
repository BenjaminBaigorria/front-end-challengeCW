import { applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import textReducer from "../reducer";
import {configureStore} from "@reduxjs/toolkit"


export const store= configureStore({
    reducer: textReducer
},composeWithDevTools(applyMiddleware(thunk)))