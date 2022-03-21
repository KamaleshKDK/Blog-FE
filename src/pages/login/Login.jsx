import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://my-blogger-be.herokuapp.com/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <>
      {/* <body class="img js-fullheight  img-background">
        <section class="ftco-section">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-6 text-center mb-5">
                <h2 class="heading-section">Login</h2>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-4">
                <div class="login-wrap p-0">
                 
                  <form onSubmit={handleSubmit} class="signin-form">
                    <div class="form-group">
                      <input type="text"
                        class="form-control"
                        placeholder="Username"                     
                        ref={userRef} 
                        required />
                    </div>
                    <div class="form-group">
                      <input id="password-field"
                       type="password" 
                       class="form-control"
                        placeholder="Password"                               
                        ref={passwordRef}
                         required />
                      <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                    </div>
                    <div class="form-group">
                      <button type="submit" disabled={isFetching} class="form-control btn btn-primary submit px-3">Sign In</button>
                    </div>
                    <div class="form-group d-md-flex">
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
      </body> */}

      <div className="login">
        <span className="loginTitle">LOGIN</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter username"
            ref={userRef}
          />
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter password"
            ref={passwordRef}
          />
          <button className="loginButton" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
      </div>
    </>
  );
}