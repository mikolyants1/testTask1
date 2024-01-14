import { memo, useContext } from "react"
import styles from '../../style/footer.module.css'
import { context } from "../../types/type"
import Context from "../../helpers/Context";

interface props {
    count:()=>void
}

function NextButton({count}:props):JSX.Element{
    const {step} = useContext<context>(Context);
    const subStep:boolean = step == 2;
    const type:"button"|"submit" = step == 3 ? "submit" : "button";
    
    return (
        <button type={type} onClick={count}
         className={styles.next}>
          {subStep? "отправить":"далее"}
        </button>
    )
}

export default memo(NextButton)