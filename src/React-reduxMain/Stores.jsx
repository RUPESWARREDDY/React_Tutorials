import { createStore } from "redux";

const initialState={
    balance:0,
    fullname:'eswar',
    mobile:'1234567890'
}
const AccountReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'deposit':return {...state,balance:state.balance + (+action.payload)};
        case 'withdraw':return {...state,balance:state.balance - action.payload};
        case 'updatename':return{...state,fullname:action.payload};
        case 'updateMobile':return {...state,mobile:action.payload};
        case 'reset': return initialState;
        default:return state;
    }
}
const store=createStore(AccountReducer)
export default store