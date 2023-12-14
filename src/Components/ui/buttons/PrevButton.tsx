import { memo, useContext } from "react"
import styles from '../../style/footer.module.css'
import { Context } from "../../paths/Main"
import { context } from "../../types/type";

interface props {
    count:()=>void
}

function PrevButton({count}:props):JSX.Element{
    const {nav,step} = useContext<context>(Context);
    
    const press = ():void => {
      step == 0 ? nav() : count();
    }
    return (
        <button type="button" onClick={press}
         className={styles.prev}>
            назад
        </button>
    )
}

export default memo(PrevButton)