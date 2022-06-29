import * as yup from "yup";

/* eslint-disable no-useless-escape */
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const email = yup.string().trim().matches(emailRegex, "Must be a valid email!").required("*Required")
const username =  yup.string().trim().required("*Required")
const password = yup.string().trim().matches(passwordRegex, "Your password is not strong").required("*Required")
const contactNo = yup.string().matches(phoneRegExp, 'Phone number is not valid')

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

export const userValidations = yup.object().shape({
    username : username,
    email : email,
    password : password,
    contactNo : contactNo,
})

export const assetValidations = yup.object().shape({
    name : yup.string().trim().required("*Required"),
    description : yup.string().trim().required("*Required") 
})

export const assetTypeValidations = yup.object().shape({
    name : yup.string().trim().required("*Required")
})

export const assetStatusValidations = yup.object().shape({
    name : yup.string().trim().required("*Required")
})
