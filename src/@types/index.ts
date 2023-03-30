import {TextInputProps} from 'react-native';

export interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
}

export interface FormDataType {
  name: string;
  email: string;
  mobile: string;
  message: string;
  error: string;
}