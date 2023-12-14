import { memo } from "react"
import styles from '../../style/step.module.css'
import { Evt } from "../../types/type";

interface props {
    state:string,
    change:(e:Evt<HTMLTextAreaElement>)=>void
}
function SubmitStep({state,change}:props):JSX.Element{
 const count:number = state.replace(/ /g,"").length;
    return (
        <div className={styles.wrap}>
           <div className={styles.title}>
              о себе
           </div>
           <textarea
            placeholder="about"
            defaultValue={state}
            onChange={change}
            className={styles.about}
            maxLength={200}
             />
             <div
              className={styles.count}
              children={count}
              />
        </div>
    )
}

export default memo(SubmitStep)