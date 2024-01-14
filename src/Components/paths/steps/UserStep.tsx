import { memo } from "react"
import styles from '../../style/step.module.css'
import {useFormContext} from 'react-hook-form'
import { inputs, state } from "../../types/type";
import UserStepInput from "../../ui/inputs/UserStepInput";

function UserStep():JSX.Element{
const {register} = useFormContext<state>();
const regist:inputs[] = [
  {name:"nickname",title:"Никнейм"},
  {name:"name",title:"Имя"},
  {name:"surname",title:"Фамилия"},
]
    return (
       <div className={styles.wrap}>
        {regist.map(({name,title}:inputs):JSX.Element=>(
          <UserStepInput
            name={name}
            title={title}
          />
        ))}
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