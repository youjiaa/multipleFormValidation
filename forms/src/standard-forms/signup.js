import React,{ useState }  from 'react'

export default function SignUp() {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
  const [repwd, setRepwd] = useState('');
  
    const [fNameError, setfNameerror] = useState(false);
    const [lNameError, setlNameerror] = useState(false);
  const [emailError, setEmailError] = useState("");
      const [pwdError, setPwderror] = useState("");
  const [repwdError, setRepwderror] = useState(false);
  
  const fNameBlurData = () => {
    if (fName === '') {
    setfNameerror(true);
      return;
    }
    setfNameerror(false);
  };
    
  const lNameBlurData = () => {
    if (lName === '') {
    setlNameerror(true);
      return;
    }
    setlNameerror(false);
  };
    
    const emailRegex = /\S+@\S+\.\S+/;
    const validateEmail = () => {
        if (email === '') {
            setEmailError("Email is required");
            return;
        } else {
            if (emailRegex.test(email)) {
                setEmailError('')
                return;
            } else {
            setEmailError("Invalid email address");
            }
      }
  };
    
      const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validatePwd = () => {
        if (pwd === '') {
            setPwderror("Password is required");
            return;
        } else {
            if (pwdRegex.test(pwd)) {
                setPwderror('')
                return;
            } else {
            setPwderror( "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character");
            }
      }
    };

  const repwdBlurData = () => {
    if (repwd !== pwd) {
    setRepwderror(true);
      return;
    }
    setRepwderror(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(JSON.stringify({
      "first name": event.target.fName.value, 
      "last name": event.target.lName.value,
      "email": event.target.email.value,
      "password": event.target.pwd.value,
      "re-password": event.target.repwd.value,
    }))
  }

  return (
    <div classfName="App">
      <form onSubmit={handleSubmit}>
      <label>First Name:</label>
        <input
          onBlur={() => fNameBlurData()}
          type="text"
          name="fName"
          value={fName}
          onChange={e => setfName(e.target.value)}
        />
    {fNameError ? <div className="input-feedback">First Name is required</div> : null}           
 <br />

    <label>Last Name:</label>
        <input
          onBlur={() => lNameBlurData()}
          type="text"
          name="lName"
          value={lName}
          onChange={e => setlName(e.target.value)}
        />
    {lNameError ? <div className="input-feedback">Last Name is required</div> : null}          
              <br />

    <label>Email:</label>          
    <input
          type="text"
          name="email"
        value={email}
        onBlur={validateEmail}
        onChange={e => setEmail(e.target.value)}
      />
        {emailError !== '' ? <div className="input-feedback">{emailError}</div> : null}
         <br />

   <label>Password:</label>          
    <input
          type="password"
          name="pwd"
        value={pwd}
        onBlur={validatePwd}
        onChange={e => setPwd(e.target.value)}
      />
        {pwdError !== '' ? <div className="input-feedback">{pwdError}</div> : null}
        <br />
        
      <label>Re-enter Password:</label>          
    <input
          type="password"
          name="repwd"
        value={repwd}
        onBlur={repwdBlurData}
        onChange={e => setRepwd(e.target.value)}
        />
        {repwdError ? <div className="input-feedback">Passwords must match</div> : null}
        <br />
        
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
