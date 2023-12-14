import { memo } from "react"
import { Evt, props2, state } from "../../types/type"
import styles from '../../style/step.module.css'
import {useFormContext} from 'react-hook-form'
import { getAdvant, useAction, useAppSelector } from "../../store/store";


function AboutStep({data,check}:props2):JSX.Element{
 const {register} = useFormContext<state>();
 const advant:string[] = useAppSelector(getAdvant);
 const {chanItem,addItem,delItem} = useAction();

 const change = (i:number) =>
  (e:Evt<HTMLInputElement>) => {
    chanItem({idx:i,text:e.target.value});
  }
    return (
       <div className={styles.wrap}>
         <div className={styles.title}>
           Преимущества
         </div>
          <div className={styles.addBlock}>
             {advant.map((item:string,i:number):JSX.Element=>(
               <div className={styles.mapBlock}>
                 <input
                  type="text"
                  placeholder="advantage"
                  className={styles.mapInput}
                  onChange={change(i)}
                  defaultValue={item}
                  />
                 <div onClick={()=>delItem(i)}
                  className={styles.del}>
                    +
                 </div>
               </div>
             ))}
          </div>
          <button onClick={()=>addItem()}
           className={styles.add}>
             +
          </button>
          <div>
            <div>
              Checkbox группа
            </div>
            {[1,2,3].map((i:number):JSX.Element=>{
             const checked:boolean = Boolean(data.find((x:number)=>x==i));
             return (
                <div key={i}>
                  <input
                   className={styles.checkbox}
                   type="checkbox"
                   onChange={check(i)}
                   value={i}
                   defaultChecked={checked}
                   />
                   {i}
                </div>
               )
            })}
          </div>
          <div>
            <div>
              Checkbox группа
            </div>
            {[1,2,3].map((i:number):JSX.Element=>(
                <div key={i}>
                  <input
                   type="radio"
                   {...register("radioGroup",{required:true})}
                   value={i}
                   />
                   {i}
                </div>
            ))}
          </div>
       </div>
    )
}

export default memo(AboutStep)