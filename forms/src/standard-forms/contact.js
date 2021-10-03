import React from "react";
import "./style.css";

const regexName = /^[a-z ,.'-]+$/i;
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPhone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const regexMessage = /^[a-zA-Z\s]*$/;

export default function Contact() {
    const [input, setInput] = React.useState({
        errorFirstName: false,
        errorLastName: false,
        errorEmail: false,
        errorPhone: false,
        errorBox: false,
        touched: false,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
    })
    const [errorMessage, setErrorMessage] = React.useState("")


    const handleChangeFirstName = (e) => {
        const value = e.target.value;
        const isValidName = regexName.test(value);

        setInput({
            errorFirstName: !isValidName, 
            touched: true,
            firstName: value,
        });

        if(input.errorFirstName){
            setErrorMessage("First name is not valid");
        }
    };

    const handleChangeLastName = (e) => {
        const value = e.target.value;
        const isValidName = regexName.test(value);

        setInput({
            errorLastName: !isValidName, 
            touched: true,
            lastName: value,
        });

        if(input.errorLastName){
            setErrorMessage("Last name is not valid");
        }
    }

    const handleChangeEmail = (e) => {
        const value = e.target.value;
        const isValidEmail = regexEmail.test(String(value));

        setInput({
            error: !isValidEmail, 
            touched: true,
            email: value,
        });

        if(input.errorEmail){
            setErrorMessage("Email is not valid");
        }
    }

    const handleChangePhone = (e) => {
        const value = e.target.value;
        const isValidPhone= regexPhone.test(value);

        setInput({
            errorPhone: !isValidPhone, 
            touched: true,
            phone: value,
        });

        if(input.errorPhone){
            setErrorMessage("Phone is not valid");
        }
    }

    const handleChangeMessage = (e) => {
        const value = e.target.value;
        const isValidText = regexMessage.test(value);

        setInput({
            error: !isValidText, 
            touched: true,
            message: value,
        });

        if(input.errorBox){
            setErrorMessage("Input is not valid");
        }
    }

    return (
        <>
            <form>
                <label htmlFor="firstName" style={{ display: "block" }}>
                    First Name
                </label>
                <input
                    id="firstName"
                    placeholder="Enter your first name"
                    type="text"
                    value={input.firstName}
                    onChange={handleChangeFirstName}
                    className={
                        input.errorFirstName && input.touched
                            ? "text-input error"
                            : "text-input"
                    }
                    required
                />
                {input.errorFirstName ? <p style={{ color: "red" }}>{errorMessage}</p> : ""}

                <label htmlFor="lastName" style={{ display: "block" }}>
                    Last Name
                </label>
                <input
                    id="lastName"
                    placeholder="Enter your last name"
                    type="text"
                    value={input.lastName}
                    onChange={handleChangeLastName}
                    className={
                        input.errorLastName && input.touched
                            ? "text-input error"
                            : "text-input"
                    }
                    required
                />
                {input.errorLastName ? <p style={{ color: "red" }}>{errorMessage}</p> : ""}

                <label htmlFor="email" style={{ display: "block" }}>
                    Email
                </label>
                <input
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={input.email}
                    onChange={handleChangeEmail}
                    className={
                        input.errorEmail && input.touched
                            ? "text-input error"
                            : "text-input"
                    }
                    required
                />
                {input.errorEmail ? <p style={{ color: "red" }}>{errorMessage}</p> : ""}

                <label htmlFor="phone" style={{ display: "block" }}>
                    Phone Number
                </label>
                <input
                    id="phone"
                    placeholder="Enter your phone"
                    type="text"
                    value={input.phone}
                    onChange={handleChangePhone}
                    className={
                        input.errorPhone && input.touched
                            ? "text-input error"
                            : "text-input"
                    }
                />
                {input.errorPhone ? <p style={{ color: "red" }}>{errorMessage}</p> : ""}

                <label htmlFor="messageBox" style={{ display: "block" }}>
                    Message Box
                </label>
                <textarea
                    id="messageBox"
                    placeholder="Enter your message here"
                    type="text"
                    value={input.message}
                    onChange={handleChangeMessage}
                    className={
                        input.errorBox && input.touched
                            ? "text-input error"
                            : "text-input"
                    }
                    rows="10"
                />
                {input.errorBox ? <p style={{ color: "red" }}>{errorMessage}</p> : ""}

            </form>
        </>
    )
}