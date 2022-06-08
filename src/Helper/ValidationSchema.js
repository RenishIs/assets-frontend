import * as yup from "yup";

/* eslint-disable no-useless-escape */
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const email = yup.string().trim().matches(emailRegex, "Must be a valid email!").required("*Required")
const username =  yup.string().trim().required("*Required")
const password = yup.string().trim().matches(passwordRegex, "Your password is not strong").required("*Required")

export const registerValidations = yup.object().shape({
    username : username,
    email : email,
    password : password
})

export const loginValidations = yup.object().shape({
    email : email,
    password : password
})

export const forgotPasswordValidations = yup.object().shape({
    email : email,
})

export const resetPasswordValidations = yup.object().shape({
    oldPassword: password,
    newPassword: password,
    confirmPassword: yup.string().trim().required("*Required").when("newPassword", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf(
            [yup.ref("newPassword")],
            "New Password and Confirmed password should match."
          ),
      }),
});