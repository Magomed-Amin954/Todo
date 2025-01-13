import { TypedUseSelectorHook,useSelector } from "react-redux";
import { RootState } from "../store/reducers/store";


export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;
