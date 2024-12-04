import { applyMiddleware, createStore } from "redux"
import { thunk } from 'redux-thunk'
const initialState={
    userdata:''
}
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'add':return {...state,userdata:action.payload}
        default:return state
    }
}
const ThunkStore=createStore(reducer,applyMiddleware(thunk))
export default ThunkStore