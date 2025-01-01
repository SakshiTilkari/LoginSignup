import * as Yup from 'yup';

export const emailValidation = Yup.string().email('Invalid email').required('Required');
export const passwordValidation = Yup.string().min(6, 'Password must be at least 6 characters').required('Required');
