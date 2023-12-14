import { memo } from "react"
import styles from '../../style/step.module.css'
import {useFormContext} from 'react-hook-form'

function UserStep():JSX.Element{
    const {register} = useFormContext();
    return (
       <div className={styles.wrap}>
         <div className={styles.title}>
            Никнейм
         </div>
         <input
          type="text"
          className={styles.input}
          placeholder="nickname"
         {...register('nickname',{required:true})}
           />
        <div className={styles.title}>
            Имя
        </div>
        <input
         type="text"
         className={styles.input}
         placeholder="name"
         {...register('name',{required:true})}
         />
        <div className={styles.title}>
            Фамилия
        </div>
        <input
         type="text"
         className={styles.input}
         placeholder="sername"
         {...register('sername',{required:true})}
          />
        <div className={styles.title}>
            Пол
        </div>
        <select 
         className={styles.input}
         {...register('sex',{required:true})}>
          <option value="male">
            мужской
          </option>
          <option value="female">
            женский
          </option>
        </select>
      </div>
    )
}

export default memo(UserStep)