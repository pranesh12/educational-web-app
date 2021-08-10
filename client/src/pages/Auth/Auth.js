import React, { useState } from "react";
import { loginUser, registerUser } from "../../actions/userAction";
import "./auth.css";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const [islogin, setIslogin] = useState(false);
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
    console.log(register);
    console.log(login);
    if (islogin) {
      dispatch(loginUser(login));
    } else {
      dispatch(registerUser(register));
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
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                className="form-control"
                value={login.password}
                name="password"
                placeholder="Password"
                onChange={handleOnChange}
                required
              />
            </div>
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
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                value={register.name}
                name="name"
                placeholder="Name"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                value={register.password}
                name="password"
                placeholder="Password"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={register.confirmPassword}
                className="form-control"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleOnChange}
                required
              />
            </div>
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
  );
};

export default Auth;