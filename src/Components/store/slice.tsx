import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { inintial,payload as action,payload1 as action1,pay } from "../types/type";

const initialState:inintial = {
    phone:"+7()",
    mail:"",
    andavtages:["","",""]
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
        const left:string[] = state.andavtages.slice(0,idx);
        const right:string[] = state.andavtages.slice(idx+1);
        state.andavtages = [...left,text,...right];
        },
      addItem:(state:inintial,_:PayloadAction<undefined>):void => {
          state.andavtages = [...state.andavtages,""];
        },
      delItem:(state:inintial,action:action<number>):void => {
          const items:string[] = state.andavtages
          .filter((_,i:number)=>i!==action.payload);
          state.andavtages = [...items];
       }
   }
});

export const actions = userSlice.actions;
export default userSlice.reducer