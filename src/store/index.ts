import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import reducer from '@/store/reducer';
import {AppDispatch} from "@/store/index";
import {movieApi} from "@/api/movieApi";
import ListenerMiddleware from './middlware';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware).prepend(ListenerMiddleware.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export default store;
