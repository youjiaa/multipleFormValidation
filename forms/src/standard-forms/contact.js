import React from "react";
import "./style.css";

const regex = {
    name: /^[a-z ,.'-]+$/i,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    message: /^[a-zA-Z\s]*$/
};

export default function Contact() {
    const [input, setInput] = React.useState({
        errors: false,
        touched: false,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message:""
    })

    const handleChange = (e) => {
        let value = e.target.value;
        const isValidName = regex.name.test(value);
        const isValidEmail = regex.email.test(value);
        const isValidPhone = regex.phone.test(value);
        const isValidText = regex.message.test(value);
        console.log(isValidName)

        setInput({
            error: !isValidName || !isValidEmail || !isValidPhone || isValidText,
            touched: true,
            firstName: value,
            lastName: value,
            phone: "",
            email: "",
            message: ""
        });
    };

    const handleSubmit = () => {
        console.log("no submit function yet");
    };

    const handleBlur = () => {
        console.log("no blur function yet");
    }

    console.log("errors", input.errors)
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        input.errors && input.touched
                            ? "text-input error"
                            : "text-input"
                    }
                />

                <label htmlFor="lastName" style={{ display: "block" }}>
                    Last Name
                </label>
                <input
                    id="lastName"
                    placeholder="Enter your last name"
                    type="text"
                    value={input.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        input.errors && input.touched
                            ? "text-input error"
                            : "text-input"
                    }
                />

                <label htmlFor="phone" style={{ display: "block" }}>
                    Phone Number
                </label>
                <input
                    id="phone"
                    placeholder="Enter your phone"
                    type="text"
                    value={input.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        input.errors && input.touched
                            ? "text-input error"
                            : "text-input"
                    }
                />

            </form>
        </>
    )
}