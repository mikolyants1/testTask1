import {ActionCreatorWithPayload,PayloadAction} from '@reduxjs/toolkit'
import { ChangeEvent } from 'react';

export type action = ActionCreatorWithPayload<string>;

export interface state {
    nickname:string,
    name:string,
    surname:string,
    sex:string,
    radioGroup:string,
   }
 export interface data {
    nickname:string,
    name:string,
    surname:string,
    sex:string,
    radioGroup:string,
    phone:string,
    mail:string,
    advantages:string[],
    check:number[],
    about:string
 }
  export interface prev {
    auth:boolean,
    show:boolean,
    success:boolean
   }

 export interface inintial {
    phone:string,
    mail:string,
    advantages:string[]
  }
 export interface pay {
      idx:number,
      text:string
  }
  export interface props1 {
   state:string,
   change:(e:Evt<HTMLTextAreaElement>)=>void
}
export interface props2 {
   data:number[],
   check:(idx:number)=>(e:Evt<HTMLInputElement>)=>void,
  }
export interface inputs {
   title:string,
   name:"name"|"nickname"|"radioGroup"|"surname"
};

export type payload<T> = PayloadAction<T>;

 export type payload1 = PayloadAction<pay>;

 export type next = Record<string,boolean>

 export type action1 = Record<string,string>

 export type Evt<T> = ChangeEvent<T>;
 
 export type union<T> = HTMLInputElement|T;

 export interface context {
    step:number,
    nav:()=>void
 }