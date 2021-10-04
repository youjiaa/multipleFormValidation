import React from 'react'

class SignIn extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
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
        let errors = {};
        let isValid = true;
        if (!input["email"]) {
        isValid = false;
            errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
        this.setState({
            errors: errors
        });
        
        return isValid;
    }

    pwdBlur() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;
        
        if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }

      this.setState({
        errors: errors
      });
  
      return isValid;
    }
         
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.pwdBlur() && this.EmailBlur()){
        // console.log(this.state, "HII");
  
        let input = {};
        input["email"] = "";
        input["password"] = "";
        this.setState({input:input});
  
        alert(JSON.stringify(this.state.input));
    }
  }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
  
        <label >Email Address:</label>
        <input 
            type="text" 
            name="email" 
            value={this.state.input.email}
            onChange={this.handleChange}
            onBlur={this.EmailBlur}
            id="email" />

        <div className="input-feedback">{this.state.errors.email}</div>
        

        <label >Password:</label>
        <input 
            type="password" 
            name="password" 
            value={this.state.input.password}
            onChange={this.handleChange}
            onBlur={this.pwdBlur}
            id="password" />

            <div className="input-feedback">{this.state.errors.password}</div>
              
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
  
export default SignIn;