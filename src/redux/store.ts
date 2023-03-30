import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {configureStore} from '@reduxjs/toolkit';
import formReducer from './index';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
