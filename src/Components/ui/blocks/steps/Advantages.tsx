import {memo} from 'react'
import styles from '../../../style/step.module.css'
import { getAdvant, useAction, useAppSelector } from '../../../store/store';
import { Evt } from '../../../types/type';

function Advantages():JSX.Element {
const advant:string[] = useAppSelector(getAdvant);
const {chanItem,delItem,addItem} = useAction();

const change = (i:number) =>
  (e:Evt<HTMLInputElement>) => {
  chanItem({idx:i,text:e.target.value});
};

  return (
    <>
      <div className={styles.addBlock}>
        {advant.map((item:string,i:number):JSX.Element=>(
        <div className={styles.mapBlock}>
          <input
           type="text"
           placeholder="advantage"
           className={styles.mapInput}
           onChange={change(i)}
           defaultValue={item}
            />
            <div onClick={()=>delItem(i)}
             className={styles.del}>
                 +
            </div>
          </div>
         ))}
       </div>
       <button onClick={()=>addItem()}
        className={styles.add}>
             +
        </button>
    </>
  )
}

export default memo(Advantages)