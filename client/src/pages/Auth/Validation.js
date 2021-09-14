export const LoginValidation = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password required";
  }
  return errors;
};

export const RegisterValidation = (values) => {
  let registerError = {};
  if (!values.name) {
    registerError.name = "Name is required";
  } else if (values.name < 5) {
    registerError.name = "User name could not grater than 5 charater";
  } else if (values.name > 25) {
    registerError.name = "User name is too big";
  }

  if (!values.email) {
    registerError.email = "Email is required";
  } else if (
    !values.email ===
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) {
    registerError.email = "Invaild email";
  }

  if (!values.password) {
    registerError.password = "Password  empty !!!!";
  }
  if (values.password.length < 7) {
    registerError.password = "Password must be grather than 7 ";
  }

  if (!values.confirmPassword) {
    registerError.confirmPassword = "This field cannot be empty";
  } else if (values.password !== values.confirmPassword) {
    registerError.confirmPassword = "Password doesn't match";
  }

  return registerError;
};
