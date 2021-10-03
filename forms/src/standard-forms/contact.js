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
        error: false,
        value: ""
    })

    const handleChange = (e) => {
        let value = e.target.value;
        const isValid = regex.text(value);

        setInput({
            error: !isValid,
            value: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        async values => {
            await new Promise(resolve => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
        }
    };

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
                        errors.firstName && touched.firstName
                            ? "text-input error"
                            : "text-input"
                    }
                />
            </form>
        </>
    )
}