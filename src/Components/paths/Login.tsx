import { useState,memo } from "react";
import { getMail, getPhone, useAction,
useAppSelector } from "../store/store"
import styles from "../style/login.module.css"
import { Navigate } from "react-router-dom";
import { Evt, action } from "../types/type";


function Login():JSX.Element {
 const mail:string = useAppSelector(getMail);
 const phone:string = useAppSelector(getPhone);
 const {setMail,setPhone} = useAction();
 const [auth,setAuth] = useState<boolean>(false);
 
 const change = (set:action) =>
  (e:Evt<HTMLInputElement>):void => {
   set(e.target.value);
 };

 const next = ():void => {
  setAuth(true);
 };
 
  if (auth){
    return <Navigate to="/main" />
  }
    return (
        <div className={styles.wrap}>
          <div className={styles.header}>
            <div className={styles.logo}>
              АИ
            </div>
            <div className={styles.name}>
              Алексей Иванов
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.title}>
              Номер телефона
            </div>
            <input
             type="text"
             className={styles.input}
             defaultValue={phone}
             onChange={change(setPhone)}
              />
            <div className={styles.title}>
                Email
            </div>
            <input
             type="text"
             className={styles.input}
             defaultValue={mail}
             onChange={change(setMail)}
               />
             <button onClick={next}
              className={styles.button}>
                начать
            </button>
          </div>
        </div>
    )
}

export default memo(Login)