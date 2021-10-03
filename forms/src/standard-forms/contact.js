import React from "react";
import "./style.css";

const regex = {
    name: /^[a-z ,.'-]+$/i,
    emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    text: /^[a-zA-Z\s]*$/
};

export default function Contact() {
    const [input, setInput] = React.useState({
        errors: false,
        touched: false,
        value: ""
    })

    const handleChange = (e) => {
        let value = e.target.value;
        const isValid = regex.text(value);

        setInput({
            error: !isValid,
            touched: true,
            value: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello")
    };

    const handleBlur = () => {
        console.log("hi")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName" style={{ display: "block" }}>
                    First Name
                </label>
                <inputs
                    id="firstName"
                    placeholder="Enter your first name"
                    type="text"
                    value={input}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        input.errors.name && input.touched.name
                            ? "text-input error"
                            : "text-input"
                    }
                />
            </form>
        </>
    )
}