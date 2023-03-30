import {EMAIL_REGEX, MOBILE_REGEX} from '../configs';

import {FormDataType} from '../@types';

export const validate_email = (email: string) => EMAIL_REGEX.test(email);
export const validate_mobile = (mobile: string) => MOBILE_REGEX.test(mobile);

export const validate_name = (name: string) => {
  if (name.length < 3) {
    return false;
  }
  return true;
};

export const validate_message = (message: string) => {
  if (message.length < 10) {
    return false;
  }
  return true;
};

export const validate_form_data = (data: FormDataType) => {
  if (!validate_name(data.name)) {
    return {
      valid: false,
      message: 'Name must be at least 3 characters long',
    };
  }
  if (!validate_email(data.email)) {
    return {
      valid: false,
      message: 'Please enter a valid email address',
    };
  }
  if (!validate_mobile(data.mobile)) {
    return {
      valid: false,
      message: 'Mobile number must have 10 digits',
    };
  }
  if (!validate_message(data.message)) {
    return {
      valid: false,
      message: 'Please enter a valid message',
    };
  }
  return {
    valid: true,
    message: 'Form data is valid',
  };
};
