import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialdata={
    mobile:'',
    fullname:'',
    balance:0
}
const transactionData=[]
const userSlice=createSlice({
    name:'user',
    initialState:initialdata,
    reducers:{
        updateMobile:(state,action)=>{state.mobile=action.payload;},
        updateFullname:(state,action)=>{state.fullname=action.payload},
        withdraw:(state,action)=>{state.balance -= +action.payload},
        desposit:(state,action)=>{state.balance+= (+action.payload)},

    },
})
const transactionSlice=createSlice({
    name:'transaction',
    initialState:transactionData,
    reducers:{
        addTransaction:(state,action)=>{ state.push(action.payload)}
       
    }
})
const store=configureStore({
   reducer:{ user:userSlice.reducer,
   transaction:transactionSlice.reducer}
})
export default store
export const {updateFullname,updateMobile,desposit,withdraw}=userSlice.actions
export const {addTransaction}=transactionSlice.actions