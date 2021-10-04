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
    });
    const [errorMessage, setErrorMessage] = React.useState({
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        phoneError: "",
        boxError: ""
    });
    const [isClicking, setIsClicking] = React.useState(false);
    const [isDisabled, setIsDisabled] = React.useState(false);
    let isSubmitting = false;

    const handleChangeFirstName = (e) => {
        const value = e.target.value;
        const isValidName = regexName.test(value);

        setInput({
            ...input,
            errorFirstName: !isValidName,
            touched: true,
            firstName: value,
        });

        if (input.errorFirstName) {
            setErrorMessage({firstNameError: "First name is not valid"});
        }
    };

    const handleChangeLastName = (e) => {
        const value = e.target.value;
        const isValidName = regexName.test(value);

        setInput({
            ...input,
            errorLastName: !isValidName,
            touched: true,
            lastName: value,
        });

        if (input.errorLastName) {
            setErrorMessage({lastNameError: "Last name is not valid"});
        }
    }

    const handleChangeEmail = (e) => {
        const value = e.target.value;
        const isValidEmail = regexEmail.test(value);

        setInput({
            ...input,
            errorEmail: !isValidEmail,
            touched: true,
            email: value,
        });

        if (input.errorEmail) {
            setErrorMessage({emailError: "Email is not valid"});
        }
    }

    const handleChangePhone = (e) => {
        const value = e.target.value;
        const isValidPhone = regexPhone.test(value);

        setInput({
            ...input,
            errorPhone: !isValidPhone,
            touched: true,
            phone: value,
        });

        if (input.errorPhone) {
            setErrorMessage({phoneError: "Phone is not valid"});
        }
    }

    const handleChangeMessage = (e) => {
        const value = e.target.value;
        const isValidText = regexMessage.test(value);

        setInput({
            ...input,
            error: !isValidText,
            touched: true,
            message: value,
        });

        if (input.errorBox) {
            setErrorMessage({boxError: "Message is not valid"});
        }
    }

    const handleClick = () => {
        setIsClicking(!isClicking)

        if(input.touched){
            setIsDisabled(false)
        } else {
            setIsDisabled(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        const submission = {
            FirstName: input.firstName, 
            LastName: input.lastName, 
            Email: input.email, 
            Phone: input.phone, 
            Message: input.message}
        alert(JSON.stringify(submission, null, 2))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                {input.errorFirstName ? <p style={{ color: "red" }}>{errorMessage.firstNameError}</p> : ""}

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
                {input.errorLastName ? <p style={{ color: "red" }}>{errorMessage.lastNameError}</p> : ""}

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
                {input.errorEmail ? <p style={{ color: "red" }}>{errorMessage.emailError}</p> : ""}

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
                {input.errorPhone ? <p style={{ color: "red" }}>{errorMessage.phoneError}</p> : ""}

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
                {input.errorBox ? <p style={{ color: "red" }}>{errorMessage.boxError}</p> : ""}

                <button
                    type="button"
                    className="outline"
                    onClick={handleClick}
                    disabled={isDisabled}
                >
                    Reset
                </button>
                {(input.firstName&&input.lastName&&input.email === null) ? isSubmitting === false : isSubmitting === true}
                <button type="submit">
                    Submit
                </button>
            </form>
        </>
    )
}