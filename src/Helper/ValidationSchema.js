import * as yup from "yup";

/* eslint-disable no-useless-escape */
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const yupValidations = yup.object().shape({
    username: yup.string().required("*Required"),
    email: yup.string().matches(emailRegex, "Must be a valid email!").required("*Required"),
    password: yup.string().matches(passwordRegex, "Your password is not strong").required("*Required"),
    oldPassword: yup.string().matches(passwordRegex, "Your password is not strong").required("*Required"),
    newPassword: yup.string().matches(passwordRegex, "Your password is not strong").required("*Required"),
    confirmPassword: yup.string().required("*Required").when("newPassword", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf(
            [yup.ref("newPassword")],
            "New Password and Confirmed password should match."
          ),
      }),
});
