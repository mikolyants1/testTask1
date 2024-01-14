import { context } from "../types/type"
import {createContext} from 'react'

const Context = createContext<context>({
    step:0,
    nav:()=>{}
})

export default Context