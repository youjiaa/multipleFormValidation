import React from 'react'

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// must has 8 characters with least 1 letter and 1 number
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default function SignIn() {
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");
    const [isValidEmail, setIsValidEmail] = React.useState(false)
    const [password, setPassword] = React.useState({
        input: "",
        errorPassword: "",
        isValidPassword: false,
    });
    const [touched, setTouched] = React.useState(false)

    const handleChangeEmail = (e) => {
        const value = e.target.value;
        const isEmailValid = regexEmail.test(value);
        setEmail(value);
        setTouched(true);
        setIsValidEmail(!isEmailValid);
        if(isValidEmail){
            setError("Email is invalid");
        }; 
    };

    const handleChangePassword = (e) => {
        const value = e.target.value;
        const isPasswordValid = regexPassword.test(value);
        setPassword({ 
            input: value,
            isValidPassword: !isPasswordValid
        });
        setTouched(true);

        if(password.isValidPassword){
            setError("Password is not valid")
        };
    };

    return (
        <>
            <form>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your first name"
                    onChange={handleChangeEmail}
                    value={email}
                    className={
                        isValidEmail && touched
                            ? "text-input error"
                            : "text-input"
                    }
                    required
                />
                {isValidEmail ? <p style={{ color:"red" }}>{error}</p> : ""}

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChangePassword}
                    value={password.input}
                    className={
                        password.isValidPassword && touched
                            ? "text-input error"
                            : "text-input"
                    }
                    required
                />
                {password.isValidPassword ? <p style={{ color:"red" }}>{error}</p> : ""}
                <br />

                <button type="submit">Submit</button>
            </form>

        </>
    )
}
