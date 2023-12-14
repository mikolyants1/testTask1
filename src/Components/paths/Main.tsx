import { useCallback,useState,createContext,useReducer ,Suspense, useMemo} from "react"
import styles from '../style/main.module.css'
import ProgerssBar from "../ui/blocks/ProgerssBar";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import { Evt, context, next, prev, state,} from "../types/type";
import Loader from "../ui/Loader";
import UserStep from "./steps/UserStep";
import AboutStep from "./steps/AboutStep";
import SubmitStep from "./steps/SubmitStep";
import { getAdvant, getMail, getPhone, useAppSelector } from "../store/store";
import { SubmitHandler,useForm,FormProvider } from "react-hook-form";
import Result from "../ui/blocks/Result";
import postData from "../helpers/get";

export const Context = createContext<context>({
    step:0,nav:()=>{}
})

function Main():JSX.Element{
  const mail:string = useAppSelector(getMail);
  const phone:string = useAppSelector(getPhone);
  const advant:string[] = useAppSelector(getAdvant);
  const [step,setStep] = useState<number>(0);
  const [check,setCheck] = useState<number[]>([]);
  const [about,setAbout] = useState<string>("");
  const memoCheck:number[] = useMemo(():number[]=>check,[check]);
  const memoAbout:string = useMemo(():string=>about,[about]);
  const [state,dispatch] = useReducer(
  (prv:prev,nxt:next)=>({...prv,...nxt}),
  {auth:false,show:false,success:false})
  const methods = useForm<state>({
    defaultValues:{
        name:"",
        nickname:"",
        sername:"",
        sex:"male",
        radioGroup:""
    }
  });
  const {handleSubmit} = methods;
  
  const submit:SubmitHandler<state> = (date):void => {
    setStep(2);
    let success:boolean = true;
    const notEmpty:boolean = [...advant,...Object.values(date)]
    .filter((x:string)=>x !== "").length == 0;
    const isMail:boolean = mail.includes("@")&&mail.includes(".");
    const isPhone:boolean = phone.split("").filter((x:string)=>{
      const el:number = Number(x);
      return !Number.isNaN(el);
    }).length == 11;
    const catched:boolean = notEmpty||!check.length
    ||!advant.length||!isMail||!isPhone;
    if (catched) success = false; 
    dispatch({show:true,success:success});

    if (success) postData({...date,
    about:about,advantages:advant,
    mail:mail,phone:phone,check:check});
  };

  const nav = ():void => {
    dispatch({auth:true})
  };
  
  const close = useCallback(():void=>{
    dispatch({show:false});
  },[])
  const change = useCallback(
    (e:Evt<HTMLTextAreaElement>):void => {
    setAbout(e.target.value);
  },[])
  const checking = useCallback((idx:number) =>
  (e:Evt<HTMLInputElement>):void => {
    const newCheck:number[] = e.target
    .checked? [...check,idx] : check
    .filter((i:number)=>i!==idx);
    setCheck(newCheck)
  },[check])
  
   if (state.auth) {
    return <Navigate to='/' />
   };
   return (
    <FormProvider {...methods}>
      {state.show&&
        <Result
         res={state.success}
         close={close}
         />}
       <form className={styles.wrap}
        onSubmit={handleSubmit(submit)}>
          <Context.Provider value={{step:step,nav:nav}}>
            <ProgerssBar step={step} />
            <Suspense fallback={<Loader />}>
              {step==0&&<UserStep />}
              {step==1&&
              <AboutStep
               check={checking}
               data={memoCheck}
                />}
              {step==2&&
              <SubmitStep
               state={memoAbout}
               change={change}
              />} 
            </Suspense>
            <Footer setCount={setStep} />
           </Context.Provider>
       </form>
     </FormProvider>
    )
}

export default Main