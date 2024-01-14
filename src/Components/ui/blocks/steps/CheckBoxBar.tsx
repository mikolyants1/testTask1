import {memo} from 'react'
import { useFormContext } from 'react-hook-form'
import { state } from '../../../types/type';

function CheckBoxBar():JSX.Element {
 const {register} = useFormContext<state>();
  return (
      <div>
        <div>
          Checkbox группа
        </div>
        {[1,2,3].map((i:number):JSX.Element=>(
        <div key={i}>
          <input
            type="radio"
            {...register("radioGroup",{required:true})}
            value={i}
            />
           {i}
        </div>
        ))}
      </div>
  )
}

export default memo(CheckBoxBar)