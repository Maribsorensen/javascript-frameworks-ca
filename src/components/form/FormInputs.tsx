import React from "react";

type FormInputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInputs = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...inputProps }, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} {...inputProps} />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  }
);