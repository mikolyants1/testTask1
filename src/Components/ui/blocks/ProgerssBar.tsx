import { memo } from "react"
import styles from '../../style/main.module.css'
interface props {
    step:number
}

function ProgressBar({step}:props):JSX.Element{
    return (
       <>
         <div style={{height:10}} />
         <div className={styles.progress}>
           <div className={styles.lineContainer}>
             <div className={styles[step>0?"lineDone":"line"]} />
             <div className={styles[step>1?"lineDone":"line"]} />
           </div>
           <div className={styles.pointContainer}>
             <div className={styles.pointDone} />
             <div className={styles[step>0?"pointDone":"point"]} />
             <div className={styles[step>1?"pointDone":"point"]} />
           </div>
         </div>
         <div className={styles.numbers}>
           <div children={1} className={styles.numDone} />
           <div children={2} className={styles[step>0?"numDone":"num"]} />
           <div children={3} className={styles[step>1?"numDone":"num"]} />
         </div>
       </>
    )
};

export default memo(ProgressBar)