import {FormDataType} from '../@types';
import {createSlice} from '@reduxjs/toolkit';

const INITIAL_FORM_DATA: FormDataType = {
  email: '',
  message: '',
  mobile: '',
  name: '',
  error: '',
};

const FormSlice = createSlice({
  name: 'form',
  initialState: INITIAL_FORM_DATA,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setName, setEmail, setMobile, setMessage, setError} =
  FormSlice.actions;

export default FormSlice.reducer;
