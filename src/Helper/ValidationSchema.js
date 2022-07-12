import * as yup from "yup";

/* eslint-disable no-useless-escape */
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const email = yup.string().trim().matches(emailRegex, "Must be a valid email!").required("*Email is required")
const username =  yup.string().trim().required("*Username is required")
const password = yup.string().trim().matches(passwordRegex, "Your password is not strong").required("*Password is required")
const contactNo = yup.string().matches(phoneRegExp, 'Phone number is not valid')
const name = yup.string().trim().required("*Name is required")

export const registerValidations = yup.object().shape({
    firstName : name.required('*First Name is required'),
    lastName : name.required('*Last Name is required'),
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
    role : name.required("*Role is required")
})

export const assetValidations = yup.object().shape({
    name : name,
    location : name.required("*Location is required"),
    assetCategory : name.required("*Asset Category is required"),
    assetType : name.required("*Asset Type is required"),
    assetCondition : name.required("*Asset Condition is required"),
    assetStatus : name.required("*Asset Status is required"),
    employeeId : name.required("*Employee is required"),
    dateOfAssetAssignment : name.required("*Assignment Date is required")
})

export const assetCategoryValidation = yup.object().shape({
    name : name,
})

export const assetTypeValidations = yup.object().shape({
    name : name
})

export const assetStatusValidations = yup.object().shape({
    name : name
})
