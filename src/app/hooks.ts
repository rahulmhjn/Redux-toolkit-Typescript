// these types are specifically for typescript. In this we already modify useSelector
// and useDispatch with types so that we dont have to do it everytime in our components.

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {RootState, AppDispatch} from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;