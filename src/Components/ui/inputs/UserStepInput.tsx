import {memo} from 'react'
import styles from '../../style/step.module.css'
import { useFormContext } from 'react-hook-form'
import { inputs, state } from '../../types/type'

function UserStepInput({title,name}:inputs):JSX.Element {
 const {register} = useFormContext<state>();
  return (
    <>
      <div className={styles.title}>
        {title}
      </div>
      <input
       type="text"
       className={styles.input}
       placeholder={name}
       {...register(name,{required:true})}
      />
   </>
  )
}

export default memo(UserStepInput)