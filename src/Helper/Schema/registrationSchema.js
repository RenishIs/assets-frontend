import * as yup from "yup";

/* eslint-disable no-useless-escape */
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
export const registrationSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().matches(emailRegex, "Must be a valid email!").required(),
    password: yup.string().matches(passwordRegex, "Your password is not strong").required(),
});
