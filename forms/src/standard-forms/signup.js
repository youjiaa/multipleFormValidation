import React,{ useState }  from 'react'

export default function SignUp() {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');

    const [fNameError, setfNameerror] = useState(false);
    const [lNameError, setlNameerror] = useState(false);
    const [emailError, setEmailError] = useState("");

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
    

  return (
    <div classfName="App">
      <form>
      <label>First Name:</label>
        <input
          onBlur={() => fNameBlurData()}
          type="text"
          value={fName}
          onChange={e => setfName(e.target.value)}
        />
    {fNameError ? <div className="input-feedback">First Name is required</div> : null}           
 <br />

    <label>Last Name:</label>
        <input
          onBlur={() => lNameBlurData()}
          type="text"
          value={lName}
          onChange={e => setlName(e.target.value)}
        />
    {lNameError ? <div className="input-feedback">Last Name is required</div> : null}          
              <br />

    <label>Email:</label>          
    <input
        type="email"
        type="text"
        value={email}
        onBlur={validateEmail}
        onChange={e => setEmail(e.target.value)}
      />
      {emailError !== '' ? <div className="input-feedback">{emailError}</div> : null}

      </form>
    </div>
  );
}
