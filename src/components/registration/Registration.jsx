import React from "react";
import "./registration.css";
export const Registration = () => {
  return (
    <>
      <div className="main-content-registration">
        <div className="container bg-white rounded-lg shadow-xl">
          <div className="registration-title">Registration</div>
          <form action="">
            <div className="user-details ">
              <div className="input-box">
                <span>Full Name</span>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="input-box">
                <span>Username</span>
                <input type="text" placeholder="Enter your username" />
              </div>
              <div className="input-box">
                <span>Email</span>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="input-box">
                <span>Phone Number</span>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="input-box">
                <span>Password</span>
                <input type="text" placeholder="Enter your password" />
              </div>
              <div className="input-box">
                <span>Confirm Password</span>
                <input type="text" placeholder="confirm your password" />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="genre" id="male" />
              <input type="radio" name="genre" id="female" />
              <span className="gender-title">Gender</span>
              <div className="category flex justify-between">
                <label htmlFor="male">
                  <span className="dot-one"></span>
                  {/** reference à male de l'id de input type radio */}
                  <span className="gender">Male</span>
                </label>
                {/** reference à female de l'id de input type radio */}
                <label htmlFor="female">
                  <span className="dot-one"></span>
                  <span className="gender">Female</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-violet-600 rounded-md register-btn"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
