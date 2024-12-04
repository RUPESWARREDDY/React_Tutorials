
import {combineReducers, createStore} from 'redux'
const initialState={
    balance:0,
    fullname:'',
    mobile:'',
}
const AccountReducer=(state=initialState,action)=>{
switch(action.type)
{
    case 'deposit':return{...state,balance:state.balance + (+action.payload)};
    case 'withdraw':return{...state,balance:state.balance - action.payload};
    case 'fullnameupdate':return{...state,fullname:action.payload};
    case 'mobileupdate':return{...state,mobile:action.payload};
    case 'reset':return initialState;
    default: return state
}
}
const Transaction=(state=[],action)=>
{
    switch(action.type)
    {
        case'ADD':return [...state,{id:action.payload.id,amount:action.payload.amount,date:action.payload.date,type:action.payload.type}];
        case'debit':return [...state,{id:action.payload.id,amount:action.payload.amount,date:action.payload.date,type:action.payload.type}];
        default:return state
    }
}
let rootReducer=combineReducers(
    {
        account:AccountReducer,
        transaction:Transaction
    }
)
let store2=createStore(rootReducer)
export default store2