import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name : 'counter',
    initialState : {counter : 0},
    reducers :{
        increment : (state)=>{state.counter+=1} ,
        decrement : state => {state.counter-=1} ,
        addBy:(state,action)=> {state.counter+=action.payload},
        clear:(state)=>{state.counter=0}
    }
})

export const actions=counterSlice.actions

export const store=configureStore({
    reducer: counterSlice.reducer
})
export default store;