import { useCallback,useState,useReducer ,
Suspense, useMemo, lazy, LazyExoticComponent,
 ComponentType, useDeferredValue} from "react"
import styles from '../style/main.module.css'
import ProgerssBar from "../ui/blocks/ProgerssBar";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import { Evt, props1, props2, state,} from "../types/type";
import Loader from "../ui/Loader";
import { getAdvant, getMail, getPhone, useAppSelector } from "../store/store";
import { SubmitHandler,useForm,FormProvider } from "react-hook-form";
import Result from "../ui/blocks/Result";
import postData from "../helpers/post";
import Context from "../helpers/Context";
import { defaultState, reducer } from "../helpers/Reducer";

const UserStep:LazyExoticComponent<
ComponentType> = lazy(()=>import("./steps/UserStep"));

const AboutStep:LazyExoticComponent<
ComponentType<props2>> = lazy(()=>import("./steps/AboutStep"));

const SubmitStep:LazyExoticComponent<
ComponentType<props1>> = lazy(()=>import("./steps/SubmitStep"));

function Main():JSX.Element{
  const mail:string = useAppSelector(getMail);
  const phone:string = useAppSelector(getPhone);
  const advant:string[] = useAppSelector(getAdvant);
  const [step,setStep] = useState<number>(0);
  const defStep:number = useDeferredValue(step);
  const [check,setCheck] = useState<number[]>([]);
  const [about,setAbout] = useState<string>("");
  const memoCheck:number[] = useMemo(():number[]=>check,[check]);
  const memoAbout:string = useMemo(():string=>about,[about]);
  const [state,dispatch] = useReducer(reducer,defaultState);
  const methods = useForm<state>({
    defaultValues:{
        name:"",
        nickname:"",
        surname:"",
        sex:"male",
        radioGroup:""
    }
  });
  const {handleSubmit} = methods;
  const submit:SubmitHandler<state> = (date):void => {
    let success:boolean = true;
    const notEmpty:boolean = [...advant,...Object.values(date)]
    .filter((x:string)=>x !== "").length == 0;
    const isMail:boolean = mail.includes("@")&&mail.includes(".");
    const isPhone:boolean = phone.split("").filter((x:string)=>{
      return !Number.isNaN(Number(x));
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
    .checked ? [...check,idx] : check
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
              {defStep==0&&<UserStep />}
              {defStep==1&&
              <AboutStep
               data={memoCheck}
               check={checking}
                />}
              {defStep==2&&
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