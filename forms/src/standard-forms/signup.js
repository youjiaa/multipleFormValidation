import React, { useState } from "react";

export default function SignUp() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [repwd, setRepwd] = useState("");

  const [fNameError, setfNameerror] = useState(false);
  const [lNameError, setlNameerror] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwderror] = useState("");
  const [repwdError, setRepwderror] = useState(false);

  const [dis, setDis] = useState(true);

  const validateFname = () => {
    if (!fName) {
      // console.log(Boolean(fName))
      setfNameerror(true);
      return false;
    }
    setfNameerror(false);
    return true;
  };

  const validateLname = () => {
    if (!lName) {
      setlNameerror(true);
      return false;
    }
    setlNameerror(false);
    return true;
  };

  const emailRegex = /\S+@\S+\.\S+/;
  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else {
      if (emailRegex.test(email)) {
        setEmailError("");
        return true;
      } else {
        setEmailError("Invalid email address");
        return false;
      }
    }
  };

  const pwdRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const validatePwd = () => {
    if (!pwd) {
      setPwderror("Password is required");
      return false;
    } else {
      if (pwdRegex.test(pwd)) {
        setPwderror("");
        return true;
      } else {
        setPwderror(
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        );
        return false;
      }
    }
  };

  const repwdBlurData = () => {
    if (repwd !== pwd) {
      setRepwderror(true);
      return false;
    }
    setRepwderror(false);
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let isFnamevalid = validateFname()
    let isLnamevalid = validateLname()
    let isEmailvalid = validateEmail()
    let isPwdvalid = validatePwd()
    let isRepwdvalid = repwdBlurData()
    // if (//evoke and get return value instead of 
    //   validateFname() &&
    //   validateLname() &&
    //   validateEmail() &&
    //   validatePwd() &&
    //   repwdBlurData()
    // ) {
    if (isFnamevalid && isLnamevalid  && isEmailvalid &&  isPwdvalid && isRepwdvalid){
      alert(
        JSON.stringify({
          "first name": fName,
          "last name": event.target.lName.value,
          email: event.target.email.value,
          password: event.target.pwd.value,
          "re-password": event.target.repwd.value,
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name:</label>
      <input
        onBlur={validateFname} // not passing data value so no anon function
        type="text"
        name="fName"
        value={fName} //one way data binding from model to view
        onChange={(e) => setfName(e.target.value)}//the second way of event binding from view to model
      />
      {fNameError ? (
        <div className="input-feedback">First Name is required</div>
      ) : null}
      <br />

      <label>Last Name:</label>
      <input
        onBlur={validateLname}
        type="text"
        name="lName"
        value={lName}
        onChange={(e) => setlName(e.target.value)}
      />
      {lNameError ? (
        <div className="input-feedback">Last Name is required</div>
      ) : null}
      <br />

      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={email}
        onBlur={validateEmail}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError !== "" ? (
        <div className="input-feedback">{emailError}</div>
      ) : null}
      <br />

      <label>Password:</label>
      <input
        type="password"
        name="pwd"
        value={pwd}
        onBlur={validatePwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      {pwdError !== "" ? (
        <div className="input-feedback">{pwdError}</div>
      ) : null}
      <br />

      <label>Re-enter Password:</label>
      <input
        type="password"
        name="repwd"
        value={repwd}
        onBlur={repwdBlurData}
        onChange={(e) => setRepwd(e.target.value)}
      />
      {repwdError ? (
        <div className="input-feedback">Passwords must match</div>
      ) : null}
      <br />

      <button
        type="submit"
        disabled={fNameError || lNameError || emailError || pwdError || repwdError}
      >
        Submit
      </button>
    </form>
  );
}
