import { Dispatch, SetStateAction, memo, useCallback } from "react"
import styles from '../style/footer.module.css'
import PrevButton from "../ui/buttons/PrevButton"
import NextButton from "../ui/buttons/NextButton"

interface props {
  setCount:Dispatch<SetStateAction<number>>,
}

function Footer({setCount}:props):JSX.Element{
 
    const increment = useCallback(():void => {
       setCount((prv:number)=>prv+1)
    },[])

    const decrement = useCallback(():void => {
        setCount((prv:number)=>prv-1)
     },[])

    return (
        <div className={styles.wrap}>
          <PrevButton
           count={decrement}
          />
          <NextButton
           count={increment}
          />
        </div>
    )
}

export default memo(Footer)