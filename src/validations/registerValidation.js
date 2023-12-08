import * as Yup from "yup";

export const registerInitialValues={
    name: "",
    email: "",
    password: "",
}

export const registerValidationSchema= Yup.object({
    name: Yup.string().required("Username is required").max(50,"Name can be up to 50 characters"),
    email: Yup.string().required("Email is required").email("Email !!!!"),
    password: Yup.string()
    .required('Enter your password')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters')
    .matches(/^[a-zA-Z0-9]+$/, 'Password must be alphanumeric'),

})