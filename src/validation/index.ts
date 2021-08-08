import * as yup from "yup";
export const registerSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
  firstName: yup
    .string()
    .required("First Name is required")
    .min(1)
    .max(15)
    .label("First Name"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(1)
    .max(15)
    .label("Last Name"),
  displayName: yup.string().required().min(1).max(15).label("Name"),
});
export const loginSchema = yup.object().shape({
  identifier: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});
