import React, { useState } from "react";
import "./auth.css";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { loginUser, registerUser } from "../../Redux/actions/userAction";
import { LoginValidation, RegisterValidation } from "./Validation";

const Auth = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});
  const [islogin, setIslogin] = useState(true);
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (islogin) {
      setErrors(LoginValidation(login));
      if (Object.keys(errors).length === 0 && errors.constructor === Object) {
        dispatch(loginUser(login));
      }
    } else {
      setRegisterErrors(RegisterValidation(register));
      if (
        Object.keys(registerErrors).length === 0 &&
        registerErrors.constructor === Object
      ) {
        dispatch(registerUser(register));
      }
    }
  };
  const handleOnChange = (e) => {
    islogin
      ? setLogin({
          ...login,
          [e.target.name]: e.target.value,
        })
      : setRegister({
          ...register,
          [e.target.name]: e.target.value,
        });
  };

  return (
    <>
      <Navbar />
      <div className="container auth">
        <form onSubmit={handleSubmit}>
          {islogin ? (
            <>
              <div class="mb-3">
                <input
                  type="email"
                  className="form-control"
                  value={login.email}
                  name="email"
                  placeholder="Email"
                  onChange={handleOnChange}
                />
              </div>
              {errors.email && <p className="text-danger">{errors.email}</p>}
              <div class="mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={login.password}
                  name="password"
                  placeholder="Password"
                  onChange={handleOnChange}
                />
              </div>
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </>
          ) : (
            <>
              <div class="mb-3">
                <input
                  type="email"
                  className="form-control"
                  value={register.email}
                  name="email"
                  placeholder="Email"
                  onChange={handleOnChange}
                />
              </div>
              {registerErrors.email && (
                <p className="text-danger">{registerErrors.email}</p>
              )}
              <div className="mb-3">
                <input
                  className="form-control"
                  value={register.name}
                  name="name"
                  placeholder="Name"
                  onChange={handleOnChange}
                />
              </div>
              {registerErrors.name && (
                <p className="text-danger">{registerErrors.name}</p>
              )}
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={register.password}
                  name="password"
                  placeholder="Password"
                  onChange={handleOnChange}
                />
              </div>
              {registerErrors.password && (
                <p className="text-danger">{registerErrors.password}</p>
              )}
              <div className="mb-3">
                <input
                  type="password"
                  value={register.confirmPassword}
                  className="form-control"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleOnChange}
                />
              </div>
              {registerErrors.confirmPassword && (
                <p className="text-danger">{registerErrors.confirmPassword}</p>
              )}
            </>
          )}

          <button className="mb-2 mt-1 btn" type="submit">
            Submit
          </button>
        </form>
        {islogin ? (
          <p className="toogleAuth" onClick={() => setIslogin(false)}>
            Dont have an account Go to register page{" "}
          </p>
        ) : (
          <p className="toogleAuth" onClick={() => setIslogin(true)}>
            Have an account? go to login page
          </p>
        )}
      </div>
    </>
  );
};

export default Auth;
