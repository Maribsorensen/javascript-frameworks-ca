import React from 'react';

/**
 * FormInputs component is a reusable input field with a label and optional error message.
 * It accepts all standard input attributes and forwards the ref to the input element.
 * @param {string} label - The label for the input field.
 * @param {string} [error] - Optional error message to display below the input field.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} inputProps - Additional input attributes.
 * @returns {JSX.Element} The FormInputs component.
 */

type FormInputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInputs = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...inputProps }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="font-body">{label}</label>
        <input className="border-1 rounded-md mb-3 shadow-md/20" ref={ref} {...inputProps} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }
);
