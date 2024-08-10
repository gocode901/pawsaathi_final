import React from "react";
import SignupBox from "../../Components/signup2/SignupBox";
import "./Signup2.css";
import Navbar from "../../Components/Navbar/Navbar";

const SignupPage = () => {
  return (
    <div className="SignUpBanner">
      <Navbar />
      <div className="signup-box">
        <SignupBox />
      </div>
    </div>
  );
};

export default SignupPage;
