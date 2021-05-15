import React from "react";
import PropTypes from "prop-types";
import formContext from "./formContext";

const Form = ({children, errors, onSubmit}) => {

    const form = {
        errors: errors
    }

    return (
        <formContext.Provider value={form}>
            <form className="form-wrap" onSubmit={onSubmit}>
                {children}
            </form>
        </formContext.Provider>
    )
}

Form.propTypes = {
    children: PropTypes.any,
    errors: PropTypes.object,
    label: PropTypes.string,
}

export default Form;
