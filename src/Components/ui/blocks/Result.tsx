import { memo } from "react"
import styles from '../../style/res.module.css'
import { useNavigate,NavigateFunction } from "react-router-dom"
import { useFormContext } from "react-hook-form";
import { useAction } from "../../store/store";

interface props {
 res:boolean,
 close:()=>void
}
function Result({close,res}:props):JSX.Element{
 const navigate:NavigateFunction = useNavigate();
 const {setPhone,setMail} = useAction();
 const {reset} = useFormContext();
 const press = ():void => {
    if (res) {
        reset();
        setMail("");
        setPhone("");
        navigate("/");
    } else {
        close();
    }
 }
    return (
       <>
        <div className={styles.opacity} />
        <div className={styles.block}>
          <div className={styles.header}>
            {res ? "Форма успешно отправлена" : "Ошибка"}
          </div>
          <div className={styles.main}>
            <div className={styles[res?"big1":"big2"]}>
              <button className={styles[res?"small1":"small2"]}>
                 {res ? <>&#10003;</> : "+"}
              </button>
            </div>
          </div>
          <div className={styles[res?"success":"error"]}>
            <button onClick={press} className={styles.end}>
                {res ? "на главную":"закрыть"}
            </button>
          </div>
        </div>
       </>
    )
}

export default memo(Result)