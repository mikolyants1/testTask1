import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { inintial,payload as action,payload1 as action1,pay } from "../types/type";

const initialState:inintial = {
    phone:"+7()",
    mail:"",
    advantages:["","",""]
};

const userSlice = createSlice({
    name:"userForm",
    initialState,
    reducers:{
     setPhone:(state:inintial,action:action<string>):void=>{
           state.phone = action.payload;
        },
     setMail:(state:inintial,action:action<string>):void=>{
           state.mail = action.payload;
        },
     chanItem:(state:inintial,action:action1):void => {
        const {idx,text}:pay = action.payload;
        state.advantages = state.advantages.map(
        (item:string,i:number)=>i == idx ? text : item);
        },
      addItem:(state:inintial,_:PayloadAction<undefined>):void => {
          state.advantages = [...state.advantages,""];
        },
      delItem:(state:inintial,action:action<number>):void => {
          const items:string[] = state.advantages
          .filter((_:string,i:number)=>i!==action.payload);
          state.advantages = [...items];
       }
   }
});

export const actions = userSlice.actions;
export default userSlice.reducer