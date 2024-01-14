import { bindActionCreators, configureStore } from "@reduxjs/toolkit";
import slice,{actions } from "./slice";
import { useSelector,useDispatch, TypedUseSelectorHook } from "react-redux";
import { inintial } from "../types/type";

const store = configureStore({
    reducer:slice
})

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = () => typeof store.dispatch;

export const useAppDispatch: AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getMail = (store:inintial) => store.mail;

export const getPhone = (store:inintial) => store.phone;

export const getAdvant = (store:inintial) => store.advantages;

export const useAction = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actions,dispatch)
}

export default store