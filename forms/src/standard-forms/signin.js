import React from 'react'

class SignIn extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      emailError: '',
      pwdError: '',
      dis: false,
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
        this.EmailBlur = this.EmailBlur.bind(this);
      this.pwdBlur = this.pwdBlur.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }

     
    EmailBlur() {
      let input = this.state.input;
      let isValid = true;
      let emailError = "";
        if (!input["email"]) {
          isValid = false;
          emailError="email is Required";
      }
      if (typeof input["email"] !== "undefined") {
        if (input["email"].length === 0) {
          isValid = false;
          emailError = "email is Required";
        }else{
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            emailError = "Please enter valid email address.";
          }
        }
      }
      this.setState({ emailError: emailError, dis: isValid})
      return isValid;
    }

    pwdBlur() {
        let input = this.state.input;
        let pwdError = "";
        let isValid = true;
        
        if (!input["password"]) {
          isValid = false;
          pwdError = "Please enter your password."
      }

      this.setState({pwdError: pwdError, dis: isValid})
      return isValid;
    }

  handleSubmit(event) {
    event.preventDefault();
  
    if(this.EmailBlur() && this.pwdBlur()){
        // console.log(this.state, "HII");
        let input = {};
        input["email"] = "";
        input["password"] = "";
        this.setState({input:input});
  
        alert(JSON.stringify(this.state.input));
    }
    console.log(this.state)
  }
    
  render() {
    return (
      <div>
        {      console.log(Boolean(this.state.emailError))}
        <form onSubmit={this.handleSubmit}>
  
        <label >Email Address:</label>
        <input 
            type="text" 
            name="email" 
            value={this.state.input.email}
            onChange={this.handleChange}
            onBlur={this.EmailBlur}
            id="email" />

        <div className="input-feedback">{this.state.emailError}</div>
        

        <label >Password:</label>
        <input 
            type="password" 
            name="password" 
            value={this.state.input.password}
            onChange={this.handleChange}
            onBlur={this.pwdBlur}
            id="password" />

            <div className="input-feedback">{this.state.pwdError}</div>
              
            <button type="submit" disabled={this.state.emailError || this.state.pwdError}>Submit</button>
        </form>
      </div>
    );
  }
}
  
export default SignIn;