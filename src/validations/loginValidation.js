import * as Yup from "yup";

export const loginInitialValues={
    email:"",
    password:"",
    rememberMe:false,
};

export const loginValidationSchema=Yup.object({
    email: Yup.string().required("Enter your e-mail address").email("E-mail !!!!"),
    password: Yup.string()
    .required('Enter your password')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters')
    .matches(/^[a-zA-Z0-9]+$/, 'Password must be alphanumeric'),
});