import { memo } from "react"
import styles from '../../style/step.module.css'
import { props1 } from "../../types/type";

function SubmitStep({state,change}:props1):JSX.Element{
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