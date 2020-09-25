/* eslint-disable no-useless-concat */
import React from 'react';
import { Field } from 'redux-form';
export const TextArea = ({ input, meta: { touched, error }, ...props }) => {
    const visualError = touched && error

    return (
        <div className={"FormControl" + " " + (visualError ? "error" : "")}>
            <div>
                <textarea required {...input} {...props} />
            </div>
            {visualError && <span>{error}</span>}
        </div>
    );
}
export const Input = ({ input, meta: { touched, error }, ...props }) => {
    const visualError = touched && error

    return (
        <div className={"FormControl" + " " + (visualError ? "error" : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            {visualError && <span>{error}</span>}

        </div>
    );
}

export const FormField = (component, type, placeholder, name, validate, id) => {
    return <Field component={component} type={type} placeholder={placeholder}
        name={name}  validate={validate}
        {...id}
    />
}