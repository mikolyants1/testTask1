import { next, prev } from "../types/type";

export function reducer(prv:prev,nxt:next):prev{
    return {
        ...prv,...nxt
    }
}

export const defaultState:prev = {
    auth:false,
    show:false,
    success:false
}