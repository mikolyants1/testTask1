import { memo } from "react"
import { props2 } from "../../types/type"
import styles from '../../style/step.module.css'
import Advantages from "../../ui/blocks/steps/Advantages";
import CheckBoxBar from "../../ui/blocks/steps/CheckBoxBar";


function AboutStep({data,check}:props2):JSX.Element{
    return (
       <div className={styles.wrap}>
         <div className={styles.title}>
           Преимущества
         </div>
          <Advantages />
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
          <CheckBoxBar />
       </div>
    )
}

export default memo(AboutStep)